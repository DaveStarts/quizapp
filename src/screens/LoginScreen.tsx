import React, { useState } from 'react';
import { supabase } from '../supabase'; // Dein neuer Supabase Client
import { Trophy, User, Lock, Loader2 } from 'lucide-react';

interface LoginScreenProps {
  onLogin: (userData: any) => void;
}

export default function LoginScreen({ onLogin }: LoginScreenProps) {
  const [isRegistering, setIsRegistering] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Wir machen aus dem Namen eine "falsche" E-Mail für Supabase
    const cleanUsername = username.toLowerCase().trim().replace(/\s+/g, '');
    const fakeEmail = `${cleanUsername}@quiz-clash.local`;

    try {
      if (isRegistering) {
        // ==========================================
        // 1. REGISTRIERUNG
        // ==========================================
        const { data: authData, error: authError } = await supabase.auth.signUp(
          {
            email: fakeEmail,
            password: password,
          }
        );

        if (authError) throw authError;

        if (authData.user) {
          // Profil in der Datenbank anlegen
          const userData = {
            id: authData.user.id,
            username: username.trim(),
            totalpoints: 0,
            // gamesPlayed: 0, // Falls du diese Spalte auch in Supabase angelegt hast, hier entkommentieren
          };

          const { error: dbError } = await supabase
            .from('users')
            .insert([userData]);

          if (dbError)
            throw new Error('Spielername ist eventuell schon vergeben.');

          // Erfolgreich registriert -> Einloggen
          onLogin(userData);
        }
      } else {
        // ==========================================
        // 2. LOGIN
        // ==========================================
        const { data: authData, error: authError } =
          await supabase.auth.signInWithPassword({
            email: fakeEmail,
            password: password,
          });

        if (authError)
          throw new Error('Passwort falsch oder Nutzer nicht gefunden.');

        if (authData.user) {
          // Spielstand vom Supabase-Server laden
          const { data: userData, error: dbError } = await supabase
            .from('users')
            .select('*')
            .eq('id', authData.user.id)
            .single(); // .single() sagt Supabase: Wir erwarten genau EINE Zeile als Ergebnis

          if (dbError) throw new Error('Profil konnte nicht geladen werden.');

          // Erfolgreich eingeloggt -> Daten übergeben
          if (userData) {
            onLogin(userData);
          }
        }
      }
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'Ein unbekannter Fehler ist aufgetreten.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-slate-800 rounded-3xl p-8 shadow-2xl border border-slate-700">
        <div className="flex justify-center mb-6">
          <div className="bg-indigo-600 p-4 rounded-2xl shadow-lg shadow-indigo-500/20">
            <Trophy className="w-12 h-12 text-white" />
          </div>
        </div>

        <h1 className="text-3xl font-bold text-white text-center mb-2">
          Quiz Clash
        </h1>
        <p className="text-slate-400 text-center mb-8">
          {isRegistering ? 'Erstelle dein Profil' : 'Willkommen zurück!'}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
            <input
              type="text"
              placeholder="Dein Name"
              className="w-full bg-slate-900 border border-slate-700 rounded-xl py-3 pl-11 pr-4 text-white focus:ring-2 focus:ring-indigo-500 outline-none"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
            <input
              type="password"
              placeholder="Passwort (min. 6 Zeichen)"
              className="w-full bg-slate-900 border border-slate-700 rounded-xl py-3 pl-11 pr-4 text-white focus:ring-2 focus:ring-indigo-500 outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <p className="text-red-400 text-sm text-center">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-indigo-500/20 flex justify-center items-center"
          >
            {loading ? (
              <Loader2 className="w-6 h-6 animate-spin" />
            ) : isRegistering ? (
              'Jetzt registrieren'
            ) : (
              'Anmelden'
            )}
          </button>
        </form>

        <button
          onClick={() => {
            setIsRegistering(!isRegistering);
            setError(''); // Fehler beim Wechseln zurücksetzen
          }}
          className="w-full mt-6 text-slate-400 hover:text-white text-sm transition-colors"
        >
          {isRegistering
            ? 'Schon ein Konto? Hier anmelden'
            : 'Neu hier? Account erstellen'}
        </button>
      </div>
    </div>
  );
}
