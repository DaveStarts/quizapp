import { useState, useEffect } from 'react';
import { supabase } from '../supabase'; // Dein Supabase Client
import {
  ArrowLeft,
  Swords,
  User,
  Trophy,
  Stethoscope,
  Layers,
  Loader2,
} from 'lucide-react';
import { ALL_QUESTIONS } from '../data/questions';

interface SetupScreenProps {
  currentUserId: string; // NEU: Wir brauchen die ID statt des Namens zum Filtern
  onChallenge: (opponentId: string, topic: string) => void; // NEU: ID statt Name übergeben
  onBack: () => void;
}

export default function SetupScreen({
  currentUserId,
  onChallenge,
  onBack,
}: SetupScreenProps) {
  const [opponents, setOpponents] = useState<any[]>([]);
  const [selectedOpponentId, setSelectedOpponentId] = useState<string | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(true);

  const [selectedMainCategory, setSelectedMainCategory] = useState<
    string | null
  >(null);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  const mainCategories = Object.keys(ALL_QUESTIONS);

  // Gegner aus Supabase laden
  useEffect(() => {
    const fetchOpponents = async () => {
      setIsLoading(true);
      try {
        const { data, error } = await supabase
          .from('users')
          .select('id, username, totalpoints')
          .neq('id', currentUserId) // Filtert dich selbst anhand der ID aus
          .order('totalpoints', { ascending: false });

        if (error) throw error;
        setOpponents(data || []);
      } catch (error) {
        console.error('Fehler beim Laden der Gegner:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchOpponents();
  }, [currentUserId]);

  const isReady =
    selectedOpponentId !== null &&
    selectedTopic !== null &&
    selectedMainCategory !== null;

  return (
    <div className="min-h-screen bg-slate-900 text-white p-6 pb-24">
      <div className="max-w-md mx-auto mt-6">
        {/* Header */}
        <div className="flex items-center mb-8">
          <button
            onClick={onBack}
            className="p-3 bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors mr-4"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-2xl font-bold">Neues Duell</h1>
        </div>

        {/* Schritt 1: Gegner wählen */}
        <div className="mb-8">
          <div className="flex items-center mb-4 text-slate-300">
            <div className="w-8 h-8 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold mr-3">
              1
            </div>
            <h2 className="text-lg font-semibold">Gegner auswählen</h2>
          </div>
          <div className="bg-slate-800/50 p-4 rounded-3xl border border-slate-700 space-y-3 max-h-64 overflow-y-auto shadow-inner">
            {isLoading ? (
              <div className="flex justify-center py-8">
                <Loader2 className="w-8 h-8 animate-spin text-indigo-500" />
              </div>
            ) : opponents.length === 0 ? (
              <p className="text-slate-400 text-center py-4 text-sm">
                Keine anderen Kollegen online...
              </p>
            ) : (
              opponents.map((opp) => (
                <button
                  key={opp.id}
                  onClick={() => setSelectedOpponentId(opp.id)}
                  className={`w-full flex items-center justify-between p-4 rounded-2xl border transition-all ${
                    selectedOpponentId === opp.id
                      ? 'bg-indigo-600/20 border-indigo-500 text-white shadow-[0_0_15px_rgba(79,70,229,0.2)]'
                      : 'bg-slate-800 border-slate-700 text-slate-300 hover:border-slate-500'
                  }`}
                >
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center mr-3">
                      <User className="w-5 h-5 text-slate-400" />
                    </div>
                    <span className="font-bold text-lg">{opp.username}</span>
                  </div>
                  <div className="flex items-center bg-slate-900/50 px-3 py-1.5 rounded-lg border border-slate-700">
                    <Trophy className="w-4 h-4 text-amber-400 mr-1.5" />
                    <span className="font-semibold text-sm">
                      {opp.totalpoints || 0}
                    </span>
                  </div>
                </button>
              ))
            )}
          </div>
        </div>

        {/* Schritt 2: Thema wählen */}
        <div className="mb-10">
          <div className="flex items-center mb-4 text-slate-300">
            <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold mr-3">
              2
            </div>
            <h2 className="text-lg font-semibold">Thema wählen</h2>
          </div>

          <div className="space-y-3">
            {mainCategories.map((mainCat) => {
              const isExpanded = selectedMainCategory === mainCat;

              return (
                <div key={mainCat} className="flex flex-col gap-2">
                  <button
                    onClick={() => {
                      setSelectedMainCategory(isExpanded ? null : mainCat);
                      setSelectedTopic(null);
                    }}
                    className={`p-4 rounded-2xl border text-left flex items-center transition-all ${
                      isExpanded
                        ? 'bg-emerald-600/20 border-emerald-500 text-white'
                        : 'bg-slate-800 border-slate-700 text-slate-300 hover:border-slate-500'
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 ${
                        isExpanded
                          ? 'bg-emerald-500 text-white'
                          : 'bg-slate-700 text-slate-400'
                      }`}
                    >
                      <Layers className="w-5 h-5" />
                    </div>
                    <span className="font-semibold text-lg">{mainCat}</span>
                  </button>

                  {isExpanded && (
                    <div className="pl-6 pr-2 py-1 space-y-2">
                      {Object.keys(ALL_QUESTIONS[mainCat]).map((topic) => (
                        <button
                          key={topic}
                          onClick={() => setSelectedTopic(topic)}
                          className={`w-full p-3 rounded-xl border text-left flex items-center transition-all ${
                            selectedTopic === topic
                              ? 'bg-teal-600/20 border-teal-500 text-white'
                              : 'bg-slate-800/80 border-slate-700 text-slate-400 hover:border-slate-500'
                          }`}
                        >
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                              selectedTopic === topic
                                ? 'bg-teal-500 text-white'
                                : 'bg-slate-700 text-slate-500'
                            }`}
                          >
                            <Stethoscope className="w-4 h-4" />
                          </div>
                          <span className="font-medium text-md">{topic}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Start Button */}
        <button
          disabled={!isReady}
          onClick={() =>
            isReady && onChallenge(selectedOpponentId!, selectedTopic!)
          }
          className={`w-full py-5 rounded-2xl font-bold text-xl flex items-center justify-center transition-all shadow-lg active:scale-95 ${
            isReady
              ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-500/30'
              : 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700'
          }`}
        >
          <Swords className="mr-3 w-6 h-6" />
          Herausfordern!
        </button>
      </div>
    </div>
  );
}
