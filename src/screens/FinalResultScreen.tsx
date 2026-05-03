import { ALL_QUESTIONS } from '../data/questions';
import {
  CheckCircle2,
  XCircle,
  Trophy,
  Home,
  Loader2,
  Equal,
} from 'lucide-react';

interface FinalResultProps {
  game: any;
  username: string;
  onExit: () => void;
}

export default function FinalResultScreen({
  game,
  username,
  onExit,
}: FinalResultProps) {
  const isChallenger = username === game.challenger;
  const opponentName = isChallenger ? game.opponent : game.challenger;

  // WARTEMODUS
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

  // AUSWERTUNG
  const questions =
    ALL_QUESTIONS[game.topic] || ALL_QUESTIONS['Allgemeinwissen'];

  // 1. FIX: Wir nehmen die ECHTEN, synchronisierten Indizes aus dem Spiel!
  // Fallback ist ein Array von 0-9, falls etwas schiefgeht.
  const questionIndices = game.questionIndices || [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
  ];

  const myScore = isChallenger ? game.challengerScore : game.opponentScore;
  const oppScore = isChallenger ? game.opponentScore : game.challengerScore;

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
        {/* Header mit Gesamtpunkten */}
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

        {/* Detaillierte Übersicht der Fragen */}
        <h3 className="text-xl font-bold mb-4 ml-2 text-slate-200">
          Alle 10 Fragen im Überblick
        </h3>

        {/* 2. FIX: Wir iterieren über die synchronisierten Indizes! */}
        <div className="space-y-6 mb-10">
          {questionIndices.map((realQuestionIndex: number, stepIdx: number) => {
            const q = questions[realQuestionIndex];
            if (!q) return null;

            const ans = game.answers?.[stepIdx.toString()];
            const myAns = ans?.[isChallenger ? 'challenger' : 'opponent'];
            const oppAns = ans?.[!isChallenger ? 'challenger' : 'opponent'];

            const correctAnswerText = q.a[q.correct];

            // --- 3. FIX: LOGIK FÜR ANTWORT-TEXTE ---
            // Prüfen, ob wir ein Boolean (alte Version) oder einen Index (neue Version) in der DB haben
            const myAnsIsCorrect =
              typeof myAns === 'boolean' ? myAns : myAns === q.correct;
            const oppAnsIsCorrect =
              typeof oppAns === 'boolean' ? oppAns : oppAns === q.correct;

            const getAnswerText = (ansValue: any, isCorrect: boolean) => {
              if (
                ansValue === null ||
                ansValue === undefined ||
                ansValue === -1
              )
                return 'Zeit abgelaufen';
              // Wenn die Datenbank die Zahl (Index) gespeichert hat, holen wir den genauen Text!
              if (typeof ansValue === 'number') return q.a[ansValue];
              // Fallback für alte Spiele, wo nur true/false gespeichert wurde
              return isCorrect ? correctAnswerText : 'Falsch beantwortet';
            };

            return (
              <div
                key={stepIdx}
                className="bg-slate-800 p-5 rounded-3xl border border-slate-700 shadow-lg"
              >
                <p className="font-semibold mb-4 leading-snug text-lg">
                  {stepIdx + 1}. {q.q}
                </p>

                {/* Anzeige der korrekten Lösung */}
                <div className="bg-indigo-500/10 border border-indigo-500/30 rounded-xl p-3 mb-4 flex items-center">
                  <CheckCircle2 className="w-5 h-5 text-indigo-400 mr-3 flex-shrink-0" />
                  <span className="text-indigo-200 text-sm font-medium">
                    Lösung:{' '}
                    <span className="text-white text-base">
                      {correctAnswerText}
                    </span>
                  </span>
                </div>

                {/* Wer hat was geantwortet? */}
                <div className="grid grid-cols-2 gap-3">
                  {/* Meine Antwort-Box */}
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
                    <div className="flex items-center">
                      {myAnsIsCorrect ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" />
                      ) : (
                        <XCircle className="w-4 h-4 text-red-500 mr-2 flex-shrink-0" />
                      )}
                      <span
                        className={`text-sm font-bold ${
                          myAnsIsCorrect ? 'text-emerald-400' : 'text-red-400'
                        } line-clamp-2`}
                      >
                        {getAnswerText(myAns, myAnsIsCorrect)}
                      </span>
                    </div>
                  </div>

                  {/* Gegner Antwort-Box */}
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
                    <div className="flex items-center">
                      {oppAnsIsCorrect ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" />
                      ) : (
                        <XCircle className="w-4 h-4 text-red-500 mr-2 flex-shrink-0" />
                      )}
                      <span
                        className={`text-sm font-bold ${
                          oppAnsIsCorrect ? 'text-emerald-400' : 'text-red-400'
                        } line-clamp-2`}
                      >
                        {getAnswerText(oppAns, oppAnsIsCorrect)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Home Button */}
        <button
          onClick={onExit}
          className="w-full bg-slate-700 hover:bg-slate-600 py-5 rounded-2xl font-bold text-lg flex items-center justify-center transition-all shadow-lg active:scale-95"
        >
          <Home className="mr-3 w-6 h-6" />
          Zurück zur Lobby
        </button>
      </div>
    </div>
  );
}
