import { useState } from 'react';
import { getQuestionsForTopic } from '../data/questions';
import {
  CheckCircle2,
  XCircle,
  Trophy,
  Home,
  Loader2,
  Equal,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

interface FinalResultProps {
  game: any;
  userId: string; // Geändert: userId statt username für eindeutigen Abgleich
  onExit: () => void;
}

interface Question {
  q: string;
  a: string[];
  correct: number;
}

export default function FinalResultScreen({
  game,
  userId,
  onExit,
}: FinalResultProps) {
  const [expandedQuestion, setExpandedQuestion] = useState<number | null>(null);

  // Abgleich über UUIDs (challenger_id / opponent_id)
  const isChallenger = userId === game.challenger_id;

  // Namen aus den Game-Daten (Stelle sicher, dass diese beim Erstellen/Laden vorhanden sind)
  const opponentName = isChallenger
    ? game.opponent_name || 'Gegner'
    : game.challenger_name || 'Herausforderer';

  // WARTEMODUS (Falls ein Spieler schneller fertig war)
  if (game.status !== 'finished') {
    return (
      <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-6 text-center">
        <Loader2 className="w-16 h-16 text-indigo-500 animate-spin mb-6" />
        <h2 className="text-2xl font-bold mb-2">Du hast das Spiel beendet!</h2>
        <p className="text-slate-400 mb-10">
          Warte auf {opponentName}, um die Auswertung und Punkte zu sehen...
        </p>
        <button
          onClick={onExit}
          className="bg-slate-800 hover:bg-slate-700 px-6 py-3 rounded-xl flex items-center transition-colors"
        >
          <Home className="mr-2 w-5 h-5" /> Zurück zur Lobby
        </button>
      </div>
    );
  }

  const questions = getQuestionsForTopic(game.topic) as Question[];

  if (!questions || questions.length === 0) {
    return (
      <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-6 text-center">
        <p className="text-slate-400 mb-6">
          Fehler: Fragen konnten nicht geladen werden.
        </p>
        <button
          onClick={onExit}
          className="bg-slate-800 px-6 py-3 rounded-xl flex items-center"
        >
          <Home className="mr-2 w-5 h-5" /> Zurück zur Lobby
        </button>
      </div>
    );
  }

  // Snake Case: question_indices
  const questionIndices = game.question_indices || [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
  ];

  // Snake Case: Score-Felder
  const myScore = isChallenger ? game.challenger_score : game.opponent_score;
  const oppScore = isChallenger ? game.opponent_score : game.challenger_score;

  let resultText = '';
  let pointsGained = 0;
  let resultColor = '';

  if (myScore > oppScore) {
    resultText = 'Du hast gewonnen!';
    pointsGained = 10;
    resultColor = 'text-emerald-400';
  } else if (myScore < oppScore) {
    resultText = 'Du hast verloren!';
    pointsGained = 0;
    resultColor = 'text-red-400';
  } else {
    resultText = 'Unentschieden!';
    pointsGained = 5;
    resultColor = 'text-amber-400';
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white p-6 pb-20 flex flex-col items-center">
      <div className="max-w-md w-full mt-10">
        {/* Score Header */}
        <div className="bg-slate-800 rounded-3xl p-8 border border-slate-700 text-center shadow-2xl mb-10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500"></div>

          <div className="flex justify-center mb-4">
            {myScore > oppScore ? (
              <Trophy className="w-16 h-16 text-yellow-400" />
            ) : myScore === oppScore ? (
              <Equal className="w-16 h-16 text-amber-400" />
            ) : (
              <XCircle className="w-16 h-16 text-red-500 opacity-50" />
            )}
          </div>

          <h1 className={`text-3xl font-bold mb-2 ${resultColor}`}>
            {resultText}
          </h1>
          <p className="text-slate-400 mb-6 font-medium">
            Du erhältst +{pointsGained} Punkte
          </p>

          <div className="flex justify-between items-center bg-slate-900/50 rounded-2xl p-4">
            <div className="text-center w-1/2 border-r border-slate-700">
              <p className="text-sm text-slate-400 mb-1">Du</p>
              <p className="text-3xl font-bold">{myScore}</p>
            </div>
            <div className="text-center w-1/2">
              <p className="text-sm text-slate-400 mb-1">{opponentName}</p>
              <p className="text-3xl font-bold">{oppScore}</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mb-4 ml-2 mr-2">
          <h3 className="text-xl font-bold text-slate-200">
            Alle 10 Fragen im Überblick
          </h3>
        </div>

        {/* Fragen-Liste */}
        <div className="space-y-6 mb-10">
          {questionIndices.map((realQuestionIndex: number, stepIdx: number) => {
            const q = questions[realQuestionIndex];
            if (!q) return null;

            const ans = game.answers?.[stepIdx.toString()];
            const myAns = ans?.[isChallenger ? 'challenger' : 'opponent'];
            const oppAns = ans?.[!isChallenger ? 'challenger' : 'opponent'];

            const myAnsIsCorrect = myAns === q.correct;
            const oppAnsIsCorrect = oppAns === q.correct;

            const isExpanded = expandedQuestion === stepIdx;

            return (
              <div
                key={stepIdx}
                onClick={() => setExpandedQuestion(isExpanded ? null : stepIdx)}
                className={`p-5 rounded-3xl border shadow-lg cursor-pointer transition-all duration-300 ${
                  isExpanded
                    ? 'bg-slate-800 border-indigo-500'
                    : 'bg-slate-800 border-slate-700 hover:border-slate-500'
                }`}
              >
                <div className="flex justify-between items-start mb-4">
                  <p className="font-semibold leading-snug text-lg pr-4">
                    {stepIdx + 1}. {q.q}
                  </p>
                  <div className="text-slate-500 mt-1 flex-shrink-0 bg-slate-700/50 p-1 rounded-full">
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </div>
                </div>

                <div className="bg-indigo-500/10 border border-indigo-500/30 rounded-xl p-3 mb-4 flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-indigo-400 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-indigo-200 text-sm font-medium">
                    Lösung:
                    <span
                      className={`text-white text-base block mt-1 ${
                        isExpanded ? '' : 'line-clamp-2'
                      }`}
                    >
                      {q.a[q.correct]}
                    </span>
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {/* Mein Ergebnis */}
                  <div
                    className={`flex flex-col p-3 rounded-xl border ${
                      myAnsIsCorrect
                        ? 'bg-emerald-500/10 border-emerald-500/30'
                        : 'bg-red-500/10 border-red-500/30'
                    }`}
                  >
                    <span className="text-xs text-slate-400 mb-1 font-semibold uppercase tracking-wider">
                      Du
                    </span>
                    <div className="flex items-start">
                      {myAnsIsCorrect ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 mt-0.5" />
                      ) : (
                        <XCircle className="w-4 h-4 text-red-500 mr-2 mt-0.5" />
                      )}
                      <span
                        className={`text-sm font-bold ${
                          myAnsIsCorrect ? 'text-emerald-400' : 'text-red-400'
                        } ${isExpanded ? '' : 'line-clamp-2'}`}
                      >
                        {myAns === -1 || myAns === undefined
                          ? 'Zeit abgelaufen'
                          : q.a[myAns]}
                      </span>
                    </div>
                  </div>

                  {/* Gegner Ergebnis */}
                  <div
                    className={`flex flex-col p-3 rounded-xl border ${
                      oppAnsIsCorrect
                        ? 'bg-emerald-500/10 border-emerald-500/30'
                        : 'bg-red-500/10 border-red-500/30'
                    }`}
                  >
                    <span className="text-xs text-slate-400 mb-1 font-semibold uppercase tracking-wider truncate">
                      {opponentName}
                    </span>
                    <div className="flex items-start">
                      {oppAnsIsCorrect ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 mt-0.5" />
                      ) : (
                        <XCircle className="w-4 h-4 text-red-500 mr-2 mt-0.5" />
                      )}
                      <span
                        className={`text-sm font-bold ${
                          oppAnsIsCorrect ? 'text-emerald-400' : 'text-red-400'
                        } ${isExpanded ? '' : 'line-clamp-2'}`}
                      >
                        {oppAns === -1 || oppAns === undefined
                          ? 'Zeit abgelaufen'
                          : q.a[oppAns]}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <button
          onClick={onExit}
          className="w-full bg-slate-700 hover:bg-slate-600 py-5 rounded-2xl font-bold text-lg flex items-center justify-center transition-all shadow-lg active:scale-95"
        >
          <Home className="mr-3 w-6 h-6" /> Zurück zur Lobby
        </button>
      </div>
    </div>
  );
}
