import { useState, useEffect } from 'react';
import { Timer, Loader2, Home } from 'lucide-react';
import { ALL_QUESTIONS } from '../data/questions';

interface QuizScreenProps {
  topic: string;
  questionIdx: number;
  onFinish: (selectedIdx: number) => void;
  onExit: () => void;
  username: string;
  game: any; // Enthält jetzt idealerweise game.questionIndices
}

export default function QuizScreen({
  topic,
  questionIdx,
  onFinish,
  onExit,
  username,
  game,
}: QuizScreenProps) {
  // 1. Grundmenge der Fragen für das Thema holen
  const allTopicQuestions = ALL_QUESTIONS[topic] || ALL_QUESTIONS['Hygiene'];

  // 2. Synchronisierte Fragen-Auswahl
  // Wir prüfen, ob im Firebase-Spielobjekt bereits eine feste Fragen-Reihenfolge hinterlegt wurde.
  // Falls nicht (Fallback), nehmen wir die ersten 10 (nicht empfohlen für Multiplayer).
  const questionIndices = game.questionIndices || [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
  ];

  // Die aktuelle Frage basierend auf dem synchronisierten Index holen
  const currentQuestionDataIndex = questionIndices[questionIdx];
  const q = allTopicQuestions[currentQuestionDataIndex];

  const [timeLeft, setTimeLeft] = useState(10);
  const [hasAnsweredLocal, setHasAnsweredLocal] = useState(false);

  // Status aus DB für diesen Spieler
  const isChallenger = username === game.challenger;
  const currentAnswers = game.answers?.[questionIdx.toString()];
  const myAnswerInDB = currentAnswers
    ? isChallenger
      ? currentAnswers.challenger
      : currentAnswers.opponent
    : null;

  useEffect(() => {
    setHasAnsweredLocal(false);
    setTimeLeft(90);
  }, [questionIdx]);

  useEffect(() => {
    if (timeLeft > 0 && !hasAnsweredLocal && myAnswerInDB === null) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !hasAnsweredLocal && myAnswerInDB === null) {
      handleAnswer(-1);
    }
  }, [timeLeft, hasAnsweredLocal, myAnswerInDB]);

  const handleAnswer = (selectedIdx: number) => {
    if (hasAnsweredLocal || myAnswerInDB !== null) return;
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

  // ... (Rest des Codes: Wartemodus und Aktive Frage bleibt identisch zu deinem Original)
  if (hasAnsweredLocal || myAnswerInDB !== null) {
    return (
      <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-6 text-center">
        <div className="w-16 h-16 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mb-6"></div>
        <h2 className="text-2xl font-bold mb-2">Antwort gespeichert!</h2>
        <p className="text-slate-400 mb-10">Warte auf Gegner...</p>
        <button
          onClick={onExit}
          className="w-full max-w-xs bg-slate-800 py-4 rounded-2xl flex items-center justify-center"
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
