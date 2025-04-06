// lib/firebase.ts
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDzWHAcARJTBAUE2meSuDWYUAhzCDj7jSY",
  authDomain: "gdgs-b1d1f.firebaseapp.com",
  projectId: "gdgs-b1d1f",
  storageBucket: "gdgs-b1d1f.appspot.com",
  messagingSenderId: "917271536141",
  appId: "1:917271536141:web:bd6cf8790e0083a3a9ab44",
  measurementId: "G-WMR0D20GR8",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
