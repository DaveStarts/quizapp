import { useState, useEffect } from 'react';
import { supabase } from './supabase';
import LoginScreen from './screens/LoginScreen';
import LobbyScreen from './screens/LobbyScreen';
import SetupScreen from './screens/SetupScreen';
import QuizScreen from './screens/QuizScreen';
import ResultScreen from './screens/ResultScreen';
import FinalResultScreen from './screens/FinalResultScreen';
import { getQuestionsForTopic } from './data/questions';

export default function App() {
  const [user, setUser] = useState<any>(null);
  const [screen, setScreen] = useState<string>('login');
  const [activeGames, setActiveGames] = useState<any[]>([]);
  const [selectedGameId, setSelectedGameId] = useState<string | null>(null);

  const generateQuestionIndices = (topic: string) => {
    const questions = getQuestionsForTopic(topic);
    const total = questions.length;
    return Array.from({ length: total }, (_, i) => i)
      .sort(() => Math.random() - 0.5)
      .slice(0, 10);
  };

  useEffect(() => {
    if (!user?.id) return;
    const fetchGames = async () => {
      const { data } = await supabase
        .from('games')
        .select('*')
        .or(`challenger_id.eq.${user.id},opponent_id.eq.${user.id}`);
      if (data) setActiveGames(data);
    };
    fetchGames();
    const channel = supabase
      .channel('db-changes')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'games' },
        () => fetchGames()
      )
      .subscribe();
    return () => {
      supabase.removeChannel(channel);
    };
  }, [user?.id]);

  useEffect(() => {
    if (!selectedGameId || screen !== 'quiz') return;
    const game = activeGames.find((g) => g.id === selectedGameId);
    if (!game) return;
    const isChallenger = user.id === game.challenger_id;
    const myStep = isChallenger ? game.challenger_step : game.opponent_step;
    const ans = game.answers?.[myStep.toString()];
    if (
      ans &&
      typeof ans.challenger === 'number' &&
      typeof ans.opponent === 'number'
    ) {
      setScreen('result');
    }
  }, [activeGames, selectedGameId, screen, user?.id]);

  const handleChallenge = async (opponentId: string, topic: string) => {
    if (!user) return;
    try {
      const randomIndices = generateQuestionIndices(topic);

      const { error } = await supabase.from('games').insert([
        {
          challenger_id: user.id,
          opponent_id: opponentId, // 2. Jetzt existiert die Variable!
          challenger_score: 0,
          opponent_score: 0,
          challenger_step: 0,
          opponent_step: 0,
          topic,
          question_indices: randomIndices,
          status: 'pending',
          answers: {},
        },
      ]);

      if (error) throw error;
      setScreen('lobby');
    } catch (e) {
      console.error('Fehler beim Erstellen:', e);
      // Tipp: Ein alert hilft hier enorm beim Testen am Handy
      alert('Datenbank-Fehler: ' + (e as any).message);
    }
  };

  const handleFinishTurn = async (selectedIdx: number) => {
    if (!user || !selectedGameId) return;
    const game = activeGames.find((g) => g.id === selectedGameId);
    const isChallenger = user.id === game.challenger_id;
    const myStep = isChallenger ? game.challenger_step : game.opponent_step;
    const isCorrect =
      selectedIdx ===
      getQuestionsForTopic(game.topic)[game.question_indices[myStep]]?.correct;
    const newAnswers = {
      ...game.answers,
      [myStep]: {
        ...(game.answers?.[myStep] || {}),
        [isChallenger ? 'challenger' : 'opponent']: selectedIdx,
      },
    };
    await supabase
      .from('games')
      .update({
        answers: newAnswers,
        challenger_score:
          (game.challenger_score || 0) + (isChallenger && isCorrect ? 1 : 0),
        opponent_score:
          (game.opponent_score || 0) + (!isChallenger && isCorrect ? 1 : 0),
      })
      .eq('id', selectedGameId);
  };

  const handleNextQuestion = async () => {
    if (!user || !selectedGameId) return;

    const game = activeGames.find((g) => g.id === selectedGameId);
    if (!game) return;

    const isChallenger = user.id === game.challenger_id;
    const nextStep =
      (isChallenger ? game.challenger_step : game.opponent_step) + 1;

    // 1. Update in der Datenbank speichern
    await supabase
      .from('games')
      .update({
        [isChallenger ? 'challenger_step' : 'opponent_step']: nextStep,
      })
      .eq('id', selectedGameId);

    // 2. WICHTIG: Die frischen Daten sofort laden, damit React nicht mit alten Daten arbeitet
    const { data: freshGame } = await supabase
      .from('games')
      .select('*')
      .eq('id', selectedGameId)
      .single();

    // 3. Den State zwingen, das Update zu übernehmen, BEVOR wir den Screen wechseln
    if (freshGame) {
      setActiveGames((prevGames) =>
        prevGames.map((g) => (g.id === selectedGameId ? freshGame : g))
      );
    }

    // 4. Erst jetzt den Bildschirm wechseln!
    if (nextStep >= 10) {
      // Prüfen, ob das Spiel komplett fertig ist
      if (
        freshGame &&
        freshGame.challenger_step >= 10 &&
        freshGame.opponent_step >= 10
      ) {
        await supabase
          .from('games')
          .update({ status: 'finished' })
          .eq('id', selectedGameId);
      }
      setScreen('final_result');
    } else {
      setScreen('quiz');
    }
  };

  if (!user)
    return (
      <LoginScreen
        onLogin={(u: any) => {
          setUser(u);
          setScreen('lobby');
        }}
      />
    );
  const currentGame = activeGames.find((g) => g.id === selectedGameId);

  switch (screen) {
    case 'lobby':
      return (
        <LobbyScreen
          playerName={user.username}
          playerScore={user.totalpoints || 0}
          // HIER DIE ÄNDERUNG: Wir filtern die fertigen Spiele hier weg!
          activeGames={activeGames
            .filter((g) => g.status !== 'finished')
            .map((g) => {
              const isChallenger = user.id === g.challenger_id;

              // 2. Wo stehe ich gerade?
              const myStep =
                (isChallenger ? g.challenger_step : g.opponent_step) || 0;
              const stepKey = myStep.toString();
              const ans = g.answers?.[stepKey];

              const myAns = ans?.[isChallenger ? 'challenger' : 'opponent'];
              const bothDone =
                ans &&
                typeof ans.challenger === 'number' &&
                typeof ans.opponent === 'number';

              // 3. NEU: Den richtigen Namen aus der Datenbank auslesen
              const displayName = isChallenger
                ? g.opponent_name
                : g.challenger_name;

              return {
                ...g,
                // Wir übergeben den echten Namen (oder "Gegner", falls es ein altes Testspiel ist)
                opponent: displayName || 'Gegner',
                status: bothDone
                  ? 'result_pending'
                  : myAns !== undefined
                  ? 'waiting'
                  : 'your_turn',
              };
            })}
          onNewGame={() => setScreen('setup')}
          onTraining={() => setScreen('training')}
          onAcceptGame={(id) => {
            setSelectedGameId(id);
            setScreen('quiz');
          }}
          onDeleteGame={async (id) => {
            // Löscht das Spiel aus der Datenbank
            await supabase.from('games').delete().eq('id', id);
          }}
        />
      );
    case 'setup':
      return (
        <SetupScreen
          currentUserId={user.id}
          onChallenge={handleChallenge}
          onBack={() => setScreen('lobby')}
        />
      );
    case 'quiz':
      return (
        <QuizScreen
          topic={currentGame?.topic}
          questionIdx={
            (user.id === currentGame?.challenger_id
              ? currentGame?.challenger_step
              : currentGame?.opponent_step) || 0
          }
          onFinish={handleFinishTurn}
          onExit={() => setScreen('lobby')}
          userId={user.id}
          game={currentGame}
        />
      );
    case 'result':
      return (
        <ResultScreen
          game={currentGame}
          onNext={handleNextQuestion}
          onExit={() => setScreen('lobby')}
          userId={user.id}
        />
      );
    case 'final_result':
      return (
        <FinalResultScreen
          game={currentGame}
          userId={user.id}
          onExit={() => setScreen('lobby')}
        />
      );
    default:
      return null;
  }
}
