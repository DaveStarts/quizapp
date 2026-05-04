import { Play, Plus, Trash2, Trophy, BrainCircuit, Swords } from 'lucide-react'; // Hab noch zwei coole Icons für die Buttons ergänzt!

interface LobbyScreenProps {
  playerName: string;
  playerScore: number;
  activeGames: any[];
  onNewGame: () => void;
  onAcceptGame: (gameId: string) => void;
  onDeleteGame: (gameId: string) => void;
  onTraining: () => void; // <--- NEU: Diese Prop sagt der Lobby, was beim Klick auf "Training" passieren soll
}

export default function LobbyScreen({
  playerName,
  playerScore,
  activeGames,
  onNewGame,
  onAcceptGame,
  onDeleteGame,
  onTraining, // <--- NEU: Hier auspacken
}: LobbyScreenProps) {
  return (
    <div className="min-h-screen bg-slate-900 text-white p-6">
      <div className="max-w-2xl mx-auto mt-8">
        {/* Header mit Name und Punkten */}
        <div className="flex justify-between items-center mb-10 bg-slate-800 p-6 rounded-3xl border border-slate-700 shadow-xl">
          <div>
            <h1 className="text-3xl font-bold mb-2">Hallo, {playerName}!</h1>
            {/* Punktestand Anzeige */}
            <div className="flex items-center text-amber-400 bg-amber-400/10 px-4 py-2 rounded-xl border border-amber-400/20 inline-flex">
              <Trophy className="w-5 h-5 mr-2" />
              <span className="font-bold">{playerScore} Punkte</span>
            </div>
          </div>
          <button
            onClick={onNewGame}
            className="bg-indigo-600 hover:bg-indigo-500 text-white p-4 rounded-2xl font-bold flex items-center transition-all shadow-lg shadow-indigo-500/30 active:scale-95 hidden sm:flex"
          >
            <Plus className="w-6 h-6 mr-2" />
            Neues Spiel
          </button>
        </div>

        {/* Die neuen Haupt-Buttons */}
        <div className="flex space-x-4 mb-10">
          <button
            onClick={onNewGame}
            className="flex-1 bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 px-4 rounded-2xl shadow-lg flex items-center justify-center transition-all active:scale-95"
          >
            <Swords className="w-5 h-5 mr-2" />
            Neues Duell
          </button>

          <button
            onClick={onTraining} // <--- KORRIGIERT: Hier rufen wir jetzt die übergebene Funktion auf
            className="flex-1 bg-slate-800 hover:bg-slate-700 text-white font-bold py-4 px-4 rounded-2xl border border-slate-700 hover:border-slate-500 shadow-lg flex items-center justify-center transition-all active:scale-95"
          >
            <BrainCircuit className="w-5 h-5 mr-2" />
            Training
          </button>
        </div>

        <h2 className="text-xl font-semibold mb-4 text-slate-300">
          Deine aktiven Spiele
        </h2>

        {activeGames.length === 0 ? (
          <div className="bg-slate-800/50 border border-slate-700 border-dashed rounded-3xl p-10 text-center text-slate-500">
            Du hast aktuell keine aktiven Spiele. Starte ein neues Duell!
          </div>
        ) : (
          <div className="space-y-4">
            {activeGames.map((game) => (
              <div
                key={game.id}
                className="bg-slate-800 p-5 rounded-2xl border border-slate-700 flex items-center justify-between shadow-md transition-all hover:border-slate-600"
              >
                <div>
                  <p className="font-bold text-lg">{game.opponent}</p>
                  <p className="text-sm text-slate-400 flex items-center mt-1">
                    <span className="bg-slate-700 px-2 py-0.5 rounded text-xs mr-2">
                      {game.topic}
                    </span>
                    {game.status === 'your_turn' && (
                      <span className="text-emerald-400 font-medium">
                        Du bist dran!
                      </span>
                    )}
                    {game.status === 'waiting' && (
                      <span className="text-amber-400 font-medium">
                        Wartet auf Gegner...
                      </span>
                    )}
                    {game.status === 'result_pending' && (
                      <span className="text-indigo-400 font-medium">
                        Runde beendet!
                      </span>
                    )}
                  </p>
                </div>

                <div className="flex gap-2">
                  {(game.status === 'your_turn' ||
                    game.status === 'result_pending') && (
                    <button
                      onClick={() => onAcceptGame(game.id)}
                      className="bg-emerald-600 hover:bg-emerald-500 p-3 rounded-xl transition-colors shadow-lg shadow-emerald-500/20"
                    >
                      <Play className="w-5 h-5" />
                    </button>
                  )}
                  <button
                    onClick={() => onDeleteGame(game.id)}
                    className="bg-slate-700 hover:bg-red-500/80 hover:text-white text-slate-400 p-3 rounded-xl transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
