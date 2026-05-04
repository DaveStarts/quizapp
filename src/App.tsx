import { useState, useEffect } from 'react';
import { db } from './firebase';
import {
  doc,
  updateDoc,
  increment,
  collection,
  addDoc,
  query,
  onSnapshot,
  Timestamp,
  deleteDoc,
  where,
  getDoc,
  getDocs,
} from 'firebase/firestore';

// Screens importieren
import LoginScreen from './screens/LoginScreen';
import LobbyScreen from './screens/LobbyScreen';
import SetupScreen from './screens/SetupScreen';
import QuizScreen from './screens/QuizScreen';
import ResultScreen from './screens/ResultScreen';
import FinalResultScreen from './screens/FinalResultScreen';
import TrainingScreen from './screens/TrainingScreen';
import { ALL_QUESTIONS } from './data/questions'; // WICHTIG: Import für die Zufallslogik

export type Screen =
  | 'login'
  | 'lobby'
  | 'setup'
  | 'quiz'
  | 'result'
  | 'final_result'
  | 'training';

export default function App() {
  const [user, setUser] = useState<any>(null);
  const [screen, setScreen] = useState<Screen>('login');
  const [activeGames, setActiveGames] = useState<any[]>([]);
  const [selectedGameId, setSelectedGameId] = useState<string | null>(null);

  // --- HILFSFUNKTION FÜR RANDOM FRAGEN ---
  const generateQuestionIndices = (topic: string) => {
    const questions =
      ALL_QUESTIONS[topic] || ALL_QUESTIONS['Anatomie & Physiologie'];
    const total = questions.length;
    // Erstelle Liste aller verfügbaren Indizes
    const allIndices = Array.from({ length: total }, (_, i) => i);
    // Mischen und die ersten 10 ziehen
    return allIndices.sort(() => Math.random() - 0.5).slice(0, 10);
  };

  // 1. Echtzeit-Überwachung der Spiele
  useEffect(() => {
    if (!user) return;
    const q = query(collection(db, 'games'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const allGames = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      const myGames = allGames.filter(
        (g: any) =>
          g.challenger === user.username || g.opponent === user.username
      );
      setActiveGames(myGames);
    });
    return () => unsubscribe();
  }, [user]);

  // 1.5 Echtzeit-Überwachung des eigenen User-Profils
  useEffect(() => {
    if (!user?.username) return;

    const q = query(
      collection(db, 'users'),
      where('username', '==', user.username)
    );
    const unsubscribe = onSnapshot(q, (snapshot) => {
      if (!snapshot.empty) {
        const userData = snapshot.docs[0].data();
        setUser((prevUser: any) => ({
          ...prevUser,
          ...userData,
          id: snapshot.docs[0].id,
        }));
      }
    });

    return () => unsubscribe();
  }, [user?.username]);

  // 2. Automatischer Wechsel zum Resultat (ECHTER LIVE-MODUS)
  useEffect(() => {
    if (!selectedGameId || screen !== 'quiz') return;

    const game = activeGames.find((g) => g.id === selectedGameId);
    if (!game) return;

    const isChallenger = user.username === game.challenger;
    const myStep =
      (isChallenger ? game.challengerStep : game.opponentStep) || 0;

    const ans = game.answers?.[myStep.toString()];
    if (!ans) return;

    // DER ULTIMATIVE CHECK: Ist die Antwort eine ECHTE ZAHL (0, 1, 2 oder 3)?
    // Wenn nicht geantwortet wurde, ist es 'undefined' und der Check schlägt sicher fehl.
    const challengerAnswered = typeof ans.challenger === 'number';
    const opponentAnswered = typeof ans.opponent === 'number';

    // Nur wenn BEIDE wirklich eine Zahl abgegeben haben, geht es weiter ins Resultat
    if (challengerAnswered && opponentAnswered) {
      setScreen('result');
    }
  }, [activeGames, selectedGameId, screen, user]);

  // 3. Login-Handler
  const handleLogin = (userData: any) => {
    setUser(userData);
    setScreen('lobby');
  };

  // 4. Spiel erstellen (Herausforderung) - GEÄNDERT FÜR RANDOM FRAGEN
  const handleChallenge = async (opponentName: string, topic: string) => {
    if (!user) return;
    try {
      // Generiere hier das Set an Fragen, das für BEIDE gilt
      const randomIndices = generateQuestionIndices(topic);

      await addDoc(collection(db, 'games'), {
        challenger: user.username,
        opponent: opponentName,
        challengerScore: 0,
        opponentScore: 0,
        challengerStep: 0,
        opponentStep: 0,
        topic,
        questionIndices: randomIndices, // Festgelegtes Set in der DB
        status: 'pending',
        answers: {},
        createdAt: Timestamp.now(),
      });
      setScreen('lobby');
    } catch (e) {
      console.error('Fehler beim Erstellen:', e);
    }
  };

  // 5. Antwort abgeben (ECHTER ULTIMATIVER FIX FÜR FIRESTORE)
  const handleFinishTurn = async (selectedIdx: number) => {
    if (!user || !selectedGameId) return;
    const game = activeGames.find((g) => g.id === selectedGameId);
    if (!game) return;

    const isChallenger = user.username === game.challenger;
    const myStep =
      (isChallenger ? game.challengerStep : game.opponentStep) || 0;
    const qKey = myStep.toString();

    // --- NEU: Doppel-Antwort-Schutz ---
    // Verhindert, dass ein fehlerhafter Timer im QuizScreen mehrmals feuert
    const existingAns =
      game.answers?.[qKey]?.[isChallenger ? 'challenger' : 'opponent'];
    if (typeof existingAns === 'number') {
      console.log('Antwort wurde bereits abgegeben!');
      return;
    }

    const topicQuestions =
      ALL_QUESTIONS[game.topic] || ALL_QUESTIONS['Anatomie & Physiologie'];
    const realQIdx = game.questionIndices
      ? game.questionIndices[myStep]
      : myStep;
    const isCorrect = selectedIdx === topicQuestions[realQIdx]?.correct;

    // --- NEU: Punktgenaue Dot-Notation für Firebase ---
    // Bsp: "answers.0.challenger"
    const fieldPath = `answers.${qKey}.${
      isChallenger ? 'challenger' : 'opponent'
    }`;

    try {
      // updateDoc ist bei verschachtelten Feldern sicherer als setDoc mit merge
      await updateDoc(doc(db, 'games', selectedGameId), {
        [fieldPath]: selectedIdx,
        challengerScore: increment(isChallenger && isCorrect ? 1 : 0),
        opponentScore: increment(!isChallenger && isCorrect ? 1 : 0),
      });
    } catch (error) {
      console.error('Fehler beim Speichern der Antwort:', error);
      alert(
        'Hoppla! Die Antwort konnte nicht gespeichert werden. Bitte prüfe dein Internet.'
      );
    }
  };

  // 6. Nächste Frage (RACE-CONDITION GEFIXT)
  const handleNextQuestion = async () => {
    if (!user || !selectedGameId) return;
    const game = activeGames.find((g) => g.id === selectedGameId);
    if (!game) return;

    const isChallenger = user.username === game.challenger;
    const myStep =
      (isChallenger ? game.challengerStep : game.opponentStep) || 0;
    const nextStep = myStep + 1;

    const gameRef = doc(db, 'games', selectedGameId);

    if (nextStep < 10) {
      // Normales Weiterschalten zur nächsten Frage
      await updateDoc(gameRef, {
        [isChallenger ? 'challengerStep' : 'opponentStep']: nextStep,
      });
      setScreen('quiz');
    } else {
      // Letzter Schritt erreicht: Meinen Status auf 10 setzen
      await updateDoc(gameRef, {
        [isChallenger ? 'challengerStep' : 'opponentStep']: nextStep,
      });

      // WICHTIG: Frischen Daten-Schnappschuss direkt aus der Datenbank laden!
      const freshSnap = await getDoc(gameRef);
      const freshData = freshSnap.data();

      if (!freshData) return;

      const otherStep =
        (isChallenger ? freshData.opponentStep : freshData.challengerStep) || 0;

      // Wenn der Gegner auch bei 10 ist und das Spiel noch nicht abgerechnet wurde
      if (otherStep >= 10 && freshData.status !== 'finished') {
        let challengerPoints = 0;
        let opponentPoints = 0;

        if (freshData.challengerScore > freshData.opponentScore) {
          challengerPoints = 10;
        } else if (freshData.opponentScore > freshData.challengerScore) {
          opponentPoints = 10;
        } else {
          challengerPoints = 5;
          opponentPoints = 5;
        }

        // Spiel offiziell beenden
        await updateDoc(gameRef, {
          status: 'finished',
        });

        const addPointsToUser = async (
          usernameToReward: string,
          points: number
        ) => {
          if (points <= 0) return;
          const userQuery = query(
            collection(db, 'users'),
            where('username', '==', usernameToReward)
          );
          const snap = await getDocs(userQuery);
          if (!snap.empty) {
            await updateDoc(doc(db, 'users', snap.docs[0].id), {
              totalpoints: increment(points),
            });
          }
        };

        await addPointsToUser(freshData.challenger, challengerPoints).catch(
          console.error
        );
        await addPointsToUser(freshData.opponent, opponentPoints).catch(
          console.error
        );
      }

      setScreen('final_result');
    }
  };

  const currentGame = activeGames.find((g) => g.id === selectedGameId);

  // RENDER-LOGIK
  if (!user) return <LoginScreen onLogin={handleLogin} />;

  switch (screen) {
    case 'lobby':
      return (
        <LobbyScreen
          playerName={user.username}
          playerScore={user.totalpoints || 0} // Korrektur Kleinschreibung laut DB
          activeGames={activeGames
            .filter((g) => g.status !== 'finished')
            .map((g) => {
              const isChallenger = user.username === g.challenger;
              const myStep =
                (isChallenger ? g.challengerStep : g.opponentStep) || 0;
              const ans = g.answers?.[myStep.toString()];
              const myAns = ans?.[isChallenger ? 'challenger' : 'opponent'];

              const bothDone =
                !!ans && 'challenger' in ans && 'opponent' in ans;

              return {
                ...g,
                opponent: isChallenger ? g.opponent : g.challenger,
                status: bothDone
                  ? 'result_pending'
                  : myAns !== null && myAns !== undefined
                  ? 'waiting'
                  : 'your_turn',
              };
            })}
          onNewGame={() => setScreen('setup')}
          onTraining={() =>
            setScreen('training')
          } /* <--- GENAU HIER IST DIE NEUE ZEILE! */
          onAcceptGame={(id) => {
            setSelectedGameId(id);
            setScreen('quiz');
          }}
          onDeleteGame={(id) => deleteDoc(doc(db, 'games', id))}
        />
      );

    case 'setup':
      return (
        <SetupScreen
          playerName={user.username}
          onChallenge={handleChallenge}
          onBack={() => setScreen('lobby')}
        />
      );

    case 'quiz':
      if (!currentGame) return <div className="text-white p-10">Lade...</div>;
      const myQuizStep =
        (user.username === currentGame.challenger
          ? currentGame.challengerStep
          : currentGame.opponentStep) || 0;

      if (myQuizStep >= 10) {
        setScreen('final_result');
        return <div className="text-white p-10">Lade Auswertung...</div>;
      }

      return (
        <QuizScreen
          topic={currentGame.topic}
          questionIdx={myQuizStep}
          onFinish={handleFinishTurn}
          onExit={() => {
            setSelectedGameId(null);
            setScreen('lobby');
          }}
          username={user.username}
          game={currentGame}
        />
      );

    case 'result':
      if (!currentGame)
        return <div className="text-white p-10">Lade Ergebnis...</div>;

      return (
        <ResultScreen
          game={currentGame}
          onNext={handleNextQuestion}
          onExit={() => {
            setSelectedGameId(null);
            setScreen('lobby');
          }}
          username={user.username}
        />
      );

    case 'final_result':
      if (!currentGame)
        return <div className="text-white p-10">Lade Endauswertung...</div>;
      return (
        <FinalResultScreen
          game={currentGame}
          username={user.username}
          onExit={() => {
            setSelectedGameId(null);
            setScreen('lobby');
          }}
        />
      );

    case 'training':
      return <TrainingScreen onExit={() => setScreen('lobby')} />;

    default:
      return <div className="text-white p-10">Fehler: Unbekannter Zustand</div>;
  }
}
