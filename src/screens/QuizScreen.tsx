import { useState, useEffect } from 'react';
import { Timer, Loader2, Home } from 'lucide-react';
import { ALL_QUESTIONS } from '../data/questions';

interface QuizScreenProps {
  topic: string;
  questionIdx: number;
  onFinish: (isCorrect: boolean) => void;
  onExit: () => void; // Funktion für den "Zurück zur Lobby" Button
  username: string;
  game: any;
}

export default function QuizScreen({
  topic,
  questionIdx,
  onFinish,
  onExit,
  username,
  game,
}: QuizScreenProps) {
  // FALLBACK: Falls das gewählte Thema nicht existiert, nimm Allgemeinwissen
  const questions = ALL_QUESTIONS[topic] || ALL_QUESTIONS['Allgemeinwissen'];

  // WICHTIG: Begrenze den Index, damit er nicht über das Array hinausgeht
  const safeIdx = Math.min(questionIdx, questions.length - 1);
  const q = questions[safeIdx];

  const [timeLeft, setTimeLeft] = useState(10);
  const [hasAnsweredLocal, setHasAnsweredLocal] = useState(false);

  // Prüfen, ob für den aktuellen Index bereits eine Antwort in der DB steht
  const isChallenger = username === game.challenger;
  const currentAnswers = game.answers?.[questionIdx.toString()];
  const myAnswerInDB = currentAnswers
    ? isChallenger
      ? currentAnswers.challenger
      : currentAnswers.opponent
    : null;

  // Effekt: Wenn die Frage wechselt (nächster Index), Screen entsperren
  useEffect(() => {
    setHasAnsweredLocal(false);
    setTimeLeft(10);
  }, [questionIdx]);

  // Effekt: Timer-Logik
  useEffect(() => {
    if (timeLeft > 0 && !hasAnsweredLocal && myAnswerInDB === null) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !hasAnsweredLocal && myAnswerInDB === null) {
      handleAnswer(-1); // Zeit abgelaufen = Falsch
    }
  }, [timeLeft, hasAnsweredLocal, myAnswerInDB]);

  const handleAnswer = (selectedIdx: number) => {
    // Verhindere Klicks, wenn bereits lokal oder in DB geantwortet wurde
    if (hasAnsweredLocal || myAnswerInDB !== null) return;

    setHasAnsweredLocal(true);
    onFinish(selectedIdx === q?.correct);
  };

  // Falls die Frage nicht geladen werden konnte (Sicherheitsanker)
  if (!q) {
    return (
      <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-6 text-center">
        <Loader2 className="w-12 h-12 text-indigo-500 animate-spin mb-4" />
        <p className="text-slate-400">Frage konnte nicht geladen werden...</p>
        <button
          onClick={onExit}
          className="mt-6 bg-slate-800 px-4 py-2 rounded-xl"
        >
          Zurück zur Lobby
        </button>
      </div>
    );
  }

  // WARTEMODUS (mit dem neuen "Zurück zur Lobby" Button)
  if (hasAnsweredLocal || myAnswerInDB !== null) {
    return (
      <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-6 text-center">
        <div className="w-16 h-16 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mb-6"></div>
        <h2 className="text-2xl font-bold mb-2">Antwort gespeichert!</h2>
        <p className="text-slate-400 mb-10">
          Warte auf deinen Gegner für Frage {questionIdx + 1}...
        </p>

        {/* NEUER LOBBY-BUTTON */}
        <button
          onClick={onExit}
          className="w-full max-w-xs bg-slate-800 hover:bg-slate-700 py-4 rounded-2xl font-semibold text-slate-300 flex items-center justify-center transition-all active:scale-95 border border-slate-700 shadow-lg"
        >
          <Home className="mr-2 w-5 h-5" />
          Zurück zur Lobby
        </button>
      </div>
    );
  }

  // AKTIVE FRAGE
  return (
    <div className="min-h-screen bg-slate-900 text-white p-6 flex items-center justify-center">
      <div className="max-w-xl mx-auto w-full">
        {/* Header mit Fortschritt und Timer */}
        <div className="flex justify-between items-center mb-10">
          <div className="bg-slate-800 px-5 py-2 rounded-2xl border border-slate-700 text-slate-300 font-bold shadow-lg">
            Frage {questionIdx + 1}
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

        {/* Fragen-Box */}
        <div className="bg-slate-800 p-10 rounded-[2.5rem] border border-slate-700 mb-10 shadow-2xl text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-indigo-500/20">
            <div
              className="h-full bg-indigo-500 transition-all duration-1000 ease-linear"
              style={{ width: `${(timeLeft / 10) * 100}%` }}
            ></div>
          </div>
          <h2 className="text-3xl font-bold leading-snug">{q.q}</h2>
        </div>

        {/* Antwort-Buttons */}
        <div className="grid gap-4">
          {q.a.map((option: string, idx: number) => (
            <button
              key={idx}
              onClick={() => handleAnswer(idx)}
              className="group w-full bg-slate-800 hover:bg-slate-700 border border-slate-700 p-6 rounded-2xl text-left font-semibold transition-all active:scale-[0.98] hover:border-indigo-500 shadow-md"
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
