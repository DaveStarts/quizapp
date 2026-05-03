import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// HIER KOMMEN DEINE SCHLÜSSEL REIN:
const firebaseConfig = {
  apiKey: 'AIzaSyBh3FqOiLjzpivFnDcNC5DewYLo50pfZ8g',
  authDomain: 'quiz-de8fb.firebaseapp.com',
  projectId: 'quiz-de8fb',
  storageBucket: 'quiz-de8fb.firebasestorage.app',
  messagingSenderId: '252105759572',
  appId: '1:252105759572:web:0779241b107d844fdb86c1',
};

// Initialisiere Firebase
const app = initializeApp(firebaseConfig);

// Das sind unsere Werkzeuge für später:
export const auth = getAuth(app);
export const db = getFirestore(app);
