import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY || "AIzaSyDummy-Key-For-Local-Development",
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN || "portfolio-dummy.firebaseapp.com",
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID || "portfolio-dummy",
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET || "portfolio-dummy.appspot.com",
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID || "123456789",
  appId: process.env.REACT_APP_FIREBASE_APP_ID || "1:123456789:web:dummy"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);