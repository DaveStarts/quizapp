import React, { useState } from 'react';
import { auth, db } from '../firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
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

    // Wir machen aus dem Namen eine "falsche" E-Mail für Firebase
    const fakeEmail = `${username.toLowerCase().trim()}@quiz-clash.de`;

    try {
      if (isRegistering) {
        // 1. User Account erstellen
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          fakeEmail,
          password
        );
        const user = userCredential.user;

        // 2. Spielstand in der Datenbank (Firestore) anlegen
        const userData = {
          uid: user.uid,
          username: username,
          totalPoints: 0,
          gamesPlayed: 0,
        };
        await setDoc(doc(db, 'users', user.uid), userData);
        onLogin(userData);
      } else {
        // Login
        const userCredential = await signInWithEmailAndPassword(
          auth,
          fakeEmail,
          password
        );

        // Spielstand vom Server laden
        const userDoc = await getDoc(doc(db, 'users', userCredential.user.uid));
        if (userDoc.exists()) {
          onLogin(userDoc.data());
        }
      }
    } catch (err: any) {
      setError(
        err.message.includes('auth/user-not-found')
          ? 'Nutzer nicht gefunden'
          : 'Passwort falsch oder Name schon vergeben'
      );
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
          onClick={() => setIsRegistering(!isRegistering)}
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
