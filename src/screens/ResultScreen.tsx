import { ArrowRight, Home, Lock } from 'lucide-react';

interface ResultScreenProps {
  game: any;
  onNext: () => void;
  onExit: () => void;
  username: string;
}

export default function ResultScreen({
  game,
  onNext,
  onExit,
  username,
}: ResultScreenProps) {
  const isChallenger = username === game.challenger;
  const myStep = (isChallenger ? game.challengerStep : game.opponentStep) || 0;
  const opponentName = isChallenger ? game.opponent : game.challenger;

  // Wir prüfen nur noch, ob die Daten da sind, um Abstürze zu vermeiden.
  // Das tatsächliche Ergebnis werten wir hier absichtlich nicht mehr aus!
  const stepKey = myStep.toString();
  const currentAnswers = game.answers?.[stepKey];

  if (!currentAnswers) {
    return (
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-400">Ergebnisse werden geladen...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white p-6 flex items-center justify-center">
      <div className="bg-slate-800 p-8 rounded-[2.5rem] border border-slate-700 w-full max-w-md text-center shadow-2xl relative overflow-hidden">
        {/* Dekorativer Hintergrund */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-indigo-600/10 rounded-full blur-3xl"></div>

        <h2 className="text-3xl font-bold mb-2">Runde beendet!</h2>
        <p className="text-slate-500 mb-8 font-medium">
          Frage {myStep + 1} von 10
        </p>

        <div className="bg-slate-900/50 rounded-2xl p-6 mb-8 border border-slate-700/50">
          <Lock className="w-12 h-12 text-indigo-400 mx-auto mb-4 opacity-80" />
          <p className="text-slate-300 font-medium mb-6">
            Beide Spieler haben ihre Antwort eingeloggt. Wer richtig lag,
            erfahrt ihr am Ende des Spiels!
          </p>

          <div className="space-y-3">
            {/* Du */}
            <div className="flex items-center justify-between bg-slate-800 py-3 px-4 rounded-xl border border-slate-700">
              <span className="font-bold text-slate-200">Du</span>
              <span className="text-xs uppercase tracking-wider text-indigo-400 font-bold bg-indigo-500/10 px-3 py-1 rounded-full">
                Eingeloggt
              </span>
            </div>

            {/* Gegner */}
            <div className="flex items-center justify-between bg-slate-800 py-3 px-4 rounded-xl border border-slate-700">
              <span className="font-bold text-slate-200">{opponentName}</span>
              <span className="text-xs uppercase tracking-wider text-indigo-400 font-bold bg-indigo-500/10 px-3 py-1 rounded-full">
                Eingeloggt
              </span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3">
          <button
            onClick={onNext}
            className="w-full bg-indigo-600 hover:bg-indigo-500 py-5 rounded-2xl font-bold text-xl flex items-center justify-center transition-all active:scale-95 shadow-lg shadow-indigo-500/20"
          >
            {myStep < 3 ? 'Nächste Frage' : 'Zur Auswertung'}
            <ArrowRight className="ml-3 w-6 h-6" />
          </button>

          {/* Zurück zur Lobby */}
          <button
            onClick={onExit}
            className="w-full bg-slate-700/50 hover:bg-slate-700 py-4 rounded-2xl font-semibold text-slate-300 flex items-center justify-center transition-all active:scale-95 border border-slate-600/50"
          >
            <Home className="mr-2 w-5 h-5" />
            Zurück zur Lobby
          </button>
        </div>
      </div>
    </div>
  );
}
