import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore"; 
const firebaseConfig = {
  apiKey: "AIzaSyDtbjAaUNf0xFrIy80iv5ZQGm2d8z3T9sg",
  authDomain: "interviewai-8d90e.firebaseapp.com",
  projectId: "interviewai-8d90e",
  storageBucket: "interviewai-8d90e.firebasestorage.app",
  messagingSenderId: "3529739590",
  appId: "1:3529739590:web:4f63a40f8dc19d2973e947",
  measurementId: "G-28FES0R92L"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);