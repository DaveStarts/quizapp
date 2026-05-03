import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, query, getDocs, where } from 'firebase/firestore';
import { ArrowLeft, Swords, User, Trophy, Stethoscope } from 'lucide-react';
import { ALL_QUESTIONS } from '../data/questions'; // Wir holen die Fragen-Datenbank!

interface SetupScreenProps {
  playerName: string;
  onChallenge: (opponentName: string, topic: string) => void;
  onBack: () => void;
}

export default function SetupScreen({
  playerName,
  onChallenge,
  onBack,
}: SetupScreenProps) {
  const [opponents, setOpponents] = useState<any[]>([]);
  const [selectedOpponent, setSelectedOpponent] = useState<string | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  // Zieht automatisch alle Kategorie-Namen aus deiner questions.ts
  const availableTopics = Object.keys(ALL_QUESTIONS);

  // Gegner aus Firebase laden
  useEffect(() => {
    const fetchOpponents = async () => {
      try {
        // Alle User laden, außer sich selbst
        const q = query(
          collection(db, 'users'),
          where('username', '!=', playerName)
        );
        const querySnapshot = await getDocs(q);

        const usersList = querySnapshot.docs.map((doc) => doc.data());
        setOpponents(usersList);
      } catch (error) {
        console.error('Fehler beim Laden der Gegner:', error);
      }
    };

    fetchOpponents();
  }, [playerName]);

  const isReady = selectedOpponent !== null && selectedTopic !== null;

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

          <div className="bg-slate-800/50 p-4 rounded-3xl border border-slate-700 space-y-3 max-h-64 overflow-y-auto">
            {opponents.length === 0 ? (
              <p className="text-slate-400 text-center py-4">
                Lade Kollegen...
              </p>
            ) : (
              opponents.map((opp, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedOpponent(opp.username)}
                  className={`w-full flex items-center justify-between p-4 rounded-2xl border transition-all ${
                    selectedOpponent === opp.username
                      ? 'bg-indigo-600/20 border-indigo-500 text-white'
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
            <h2 className="text-lg font-semibold">Fachbereich wählen</h2>
          </div>

          <div className="grid grid-cols-1 gap-3">
            {availableTopics.map((topic) => (
              <button
                key={topic}
                onClick={() => setSelectedTopic(topic)}
                className={`p-4 rounded-2xl border text-left flex items-center transition-all ${
                  selectedTopic === topic
                    ? 'bg-emerald-600/20 border-emerald-500 text-white'
                    : 'bg-slate-800 border-slate-700 text-slate-300 hover:border-slate-500'
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 ${
                    selectedTopic === topic
                      ? 'bg-emerald-500 text-white'
                      : 'bg-slate-700 text-slate-400'
                  }`}
                >
                  <Stethoscope className="w-5 h-5" />
                </div>
                <span className="font-semibold text-lg">{topic}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Start Button */}
        <button
          disabled={!isReady}
          onClick={() =>
            isReady && onChallenge(selectedOpponent, selectedTopic)
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
