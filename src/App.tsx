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
  getDocs,
} from 'firebase/firestore';

// Screens importieren
import LoginScreen from './screens/LoginScreen';
import LobbyScreen from './screens/LobbyScreen';
import SetupScreen from './screens/SetupScreen';
import QuizScreen from './screens/QuizScreen';
import ResultScreen from './screens/ResultScreen';
import FinalResultScreen from './screens/FinalResultScreen';

export type Screen =
  | 'login'
  | 'lobby'
  | 'setup'
  | 'quiz'
  | 'result'
  | 'final_result';

export default function App() {
  const [user, setUser] = useState<any>(null);
  const [screen, setScreen] = useState<Screen>('login');
  const [activeGames, setActiveGames] = useState<any[]>([]);
  const [selectedGameId, setSelectedGameId] = useState<string | null>(null);

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

  // 1.5 Echtzeit-Überwachung des eigenen User-Profils (Sucht sicher nach dem Usernamen!)
  useEffect(() => {
    if (!user?.username) return;

    const q = query(
      collection(db, 'users'),
      where('username', '==', user.username)
    );
    const unsubscribe = onSnapshot(q, (snapshot) => {
      if (!snapshot.empty) {
        // Zieht den echten Punktestand und die Dokument-ID in den State
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

  // 2. Automatischer Wechsel zum Resultat für die aktuelle Frage
  useEffect(() => {
    if (!selectedGameId || screen !== 'quiz') return;

    const game = activeGames.find((g) => g.id === selectedGameId);
    if (!game) return;

    const isChallenger = user.username === game.challenger;
    const myStep =
      (isChallenger ? game.challengerStep : game.opponentStep) || 0;
    const ans = game.answers?.[myStep.toString()];

    // Wechsel zum Ergebnis, sobald beide für MEINEN aktuellen Schritt geantwortet haben
    if (
      ans &&
      ans.challenger !== null &&
      ans.challenger !== undefined &&
      ans.opponent !== null &&
      ans.opponent !== undefined
    ) {
      setScreen('result');
    }
  }, [activeGames, selectedGameId, screen, user]);

  // 3. Login-Handler
  const handleLogin = (userData: any) => {
    setUser(userData);
    setScreen('lobby');
  };

  // 4. Spiel erstellen (Herausforderung)
  const handleChallenge = async (opponentName: string, topic: string) => {
    if (!user) return;
    try {
      await addDoc(collection(db, 'games'), {
        challenger: user.username,
        opponent: opponentName,
        challengerScore: 0,
        opponentScore: 0,
        challengerStep: 0,
        opponentStep: 0,
        topic,
        status: 'pending',
        answers: {},
        createdAt: Timestamp.now(),
      });
      setScreen('lobby');
    } catch (e) {
      console.error('Fehler beim Erstellen:', e);
    }
  };

  // 5. Antwort abgeben
  const handleFinishTurn = async (isCorrect: boolean) => {
    if (!user || !selectedGameId) return;
    const game = activeGames.find((g) => g.id === selectedGameId);
    if (!game) return;

    const isChallenger = user.username === game.challenger;
    const myStep =
      (isChallenger ? game.challengerStep : game.opponentStep) || 0;
    const qKey = myStep.toString();

    const updatedAnswers = { ...(game.answers || {}) };
    if (!updatedAnswers[qKey])
      updatedAnswers[qKey] = { challenger: null, opponent: null };

    if (isChallenger) updatedAnswers[qKey].challenger = isCorrect;
    else updatedAnswers[qKey].opponent = isCorrect;

    await updateDoc(doc(db, 'games', selectedGameId), {
      answers: updatedAnswers,
      challengerScore: increment(isChallenger && isCorrect ? 1 : 0),
      opponentScore: increment(!isChallenger && isCorrect ? 1 : 0),
    });
  };

  // 6. Nächste Frage (Mit sicherer Punktevergabe am Ende)
  const handleNextQuestion = async () => {
    if (!user || !selectedGameId) return;
    const game = activeGames.find((g) => g.id === selectedGameId);
    if (!game) return;

    const isChallenger = user.username === game.challenger;
    const myStep =
      (isChallenger ? game.challengerStep : game.opponentStep) || 0;
    const nextStep = myStep + 1;

    // Wenn es noch Fragen gibt
    if (nextStep < 4) {
      await updateDoc(doc(db, 'games', selectedGameId), {
        [isChallenger ? 'challengerStep' : 'opponentStep']: nextStep,
      });
      setScreen('quiz');
    } else {
      // Wenn ich das Spiel abschließe (Step 4 erreicht)
      await updateDoc(doc(db, 'games', selectedGameId), {
        [isChallenger ? 'challengerStep' : 'opponentStep']: nextStep,
      });

      // Prüfen, ob der Gegner AUCH schon fertig ist
      const otherStep =
        (isChallenger ? game.opponentStep : game.challengerStep) || 0;

      if (otherStep >= 4 && game.status !== 'finished') {
        let challengerPoints = 0;
        let opponentPoints = 0;

        // Wer hat gewonnen?
        if (game.challengerScore > game.opponentScore) {
          challengerPoints = 10;
        } else if (game.opponentScore > game.challengerScore) {
          opponentPoints = 10;
        } else {
          challengerPoints = 5;
          opponentPoints = 5;
        }

        // Spiel offiziell beenden
        await updateDoc(doc(db, 'games', selectedGameId), {
          status: 'finished',
        });

        // HILFSFUNKTION: Sucht die korrekte ID des Profils anhand des Namens und verteilt die Punkte auf 'totalpoints'!
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

        // Punkte an beide verteilen
        await addPointsToUser(game.challenger, challengerPoints).catch(
          console.error
        );
        await addPointsToUser(game.opponent, opponentPoints).catch(
          console.error
        );
      }

      // Für mich geht es jetzt in die Abschlussübersicht
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
          playerScore={user.totalPoints || 0}
          activeGames={activeGames
            .filter((g) => g.status !== 'finished')
            .map((g) => {
              const isChallenger = user.username === g.challenger;
              const myStep =
                (isChallenger ? g.challengerStep : g.opponentStep) || 0;

              const ans = g.answers?.[myStep.toString()];
              const myAns = ans?.[isChallenger ? 'challenger' : 'opponent'];

              const bothDone =
                !!ans &&
                ans.challenger !== null &&
                ans.challenger !== undefined &&
                ans.opponent !== null &&
                ans.opponent !== undefined;

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

      // Guard: Wenn jemand aus der Lobby ins Spiel geht, aber schon bei Step 4 ist
      if (myQuizStep >= 4) {
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
      const resStep =
        (user.username === currentGame.challenger
          ? currentGame.challengerStep
          : currentGame.opponentStep) || 0;

      if (!currentGame.answers?.[resStep.toString()])
        return <div className="text-white p-10">Synchronisiere...</div>;

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

    default:
      return <div className="text-white p-10">Fehler: Unbekannter Zustand</div>;
  }
}
