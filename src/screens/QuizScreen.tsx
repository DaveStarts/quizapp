import { useState, useEffect } from 'react';
import { Timer, Loader2, Home } from 'lucide-react';
import { getQuestionsForTopic } from '../data/questions';

interface QuizScreenProps {
  topic: string;
  questionIdx: number;
  onFinish: (selectedIdx: number) => void;
  onExit: () => void;
  userId: string; // Geändert: userId statt username für eindeutigen Abgleich
  game: any;
}

export default function QuizScreen({
  topic,
  questionIdx,
  onFinish,
  onExit,
  userId,
  game,
}: QuizScreenProps) {
  const allTopicQuestions = getQuestionsForTopic(topic);

  // Synchronisierte Fragen-Auswahl aus der games-Tabelle (jsonb Feld)
  const questionIndices = game.question_indices || [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
  ];

  const currentQuestionDataIndex = questionIndices[questionIdx];
  const q = allTopicQuestions[currentQuestionDataIndex];

  const [timeLeft, setTimeLeft] = useState(10); // Standardmäßig 10s für Quiz
  const [hasAnsweredLocal, setHasAnsweredLocal] = useState(false);

  // Rollen-Check anhand der UUID
  const isChallenger = userId === game.challenger_id;
  const currentAnswers = game.answers?.[questionIdx.toString()];

  // Antwort-Check aus der Datenbank
  const rawAnswer = isChallenger
    ? currentAnswers?.challenger
    : currentAnswers?.opponent;

  const hasAnsweredDB = typeof rawAnswer === 'number';

  // Reset beim Wechsel zur nächsten Frage
  useEffect(() => {
    setHasAnsweredLocal(false);
    setTimeLeft(10);
  }, [questionIdx]);

  // Timer-Logik
  useEffect(() => {
    if (timeLeft > 0 && !hasAnsweredLocal && !hasAnsweredDB) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !hasAnsweredLocal && !hasAnsweredDB) {
      handleAnswer(-1); // Timeout
    }
  }, [timeLeft, hasAnsweredLocal, hasAnsweredDB]);

  const handleAnswer = (selectedIdx: number) => {
    if (hasAnsweredLocal || hasAnsweredDB) return;
    setHasAnsweredLocal(true);
    onFinish(selectedIdx);
  };

  if (!q) {
    return (
      <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-6 text-center">
        <Loader2 className="w-12 h-12 text-indigo-500 animate-spin mb-4" />
        <p className="text-slate-400">Frage wird geladen...</p>
      </div>
    );
  }

  // Ladebildschirm wenn gewartet wird
  if (hasAnsweredLocal || hasAnsweredDB) {
    return (
      <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-6 text-center">
        <div className="w-16 h-16 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mb-6"></div>
        <h2 className="text-2xl font-bold mb-2">Antwort gespeichert!</h2>
        <p className="text-slate-400 mb-10">Warte auf Gegner...</p>
        <button
          onClick={onExit}
          className="w-full max-w-xs bg-slate-800 py-4 rounded-2xl flex items-center justify-center hover:bg-slate-700 transition-colors border border-slate-700"
        >
          <Home className="mr-2 w-5 h-5" /> Zurück zur Lobby
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white p-6 flex items-center justify-center">
      <div className="max-w-xl mx-auto w-full">
        <div className="flex justify-between items-center mb-10">
          <div className="bg-slate-800 px-5 py-2 rounded-2xl border border-slate-700 text-slate-300 font-bold">
            Frage {questionIdx + 1} / 10
          </div>
          <div className="flex items-center bg-slate-800 px-5 py-2 rounded-full border border-slate-700 shadow-xl">
            <Timer
              className={`w-5 h-5 mr-3 ${
                timeLeft < 4 ? 'text-red-500 animate-pulse' : 'text-indigo-400'
              }`}
            />
            <span className="font-mono font-bold text-2xl">{timeLeft}s</span>
          </div>
        </div>

        <div className="bg-slate-800 p-10 rounded-[2.5rem] border border-slate-700 mb-10 shadow-2xl text-center relative overflow-hidden">
          {/* Progress Bar (orientiert an 10 Sekunden) */}
          <div className="absolute top-0 left-0 w-full h-1 bg-indigo-500/20">
            <div
              className="h-full bg-indigo-500 transition-all duration-1000 ease-linear"
              style={{ width: `${(timeLeft / 10) * 100}%` }}
            ></div>
          </div>
          <h2 className="text-3xl font-bold leading-snug">{q.q}</h2>
        </div>

        <div className="grid gap-4">
          {q.a.map((option: string, idx: number) => (
            <button
              key={idx}
              onClick={() => handleAnswer(idx)}
              className="group w-full bg-slate-800 hover:bg-slate-700 border border-slate-700 p-6 rounded-2xl text-left font-semibold transition-all hover:border-indigo-500 shadow-md"
            >
              <div className="flex items-center">
                <div className="w-10 h-10 bg-slate-700 group-hover:bg-indigo-600 rounded-xl flex items-center justify-center mr-5 text-slate-400 group-hover:text-white transition-colors border border-slate-600">
                  {String.fromCharCode(65 + idx)}
                </div>
                <span className="text-lg">{option}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
