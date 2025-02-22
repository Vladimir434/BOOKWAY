import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyApeYx5YmUlw9n4jhwjMD8cMXA1vA06K1s",
  authDomain: "bookway-107db.firebaseapp.com",
  projectId: "bookway-107db",
  storageBucket: "bookway-107db.firebasestorage.app",
  messagingSenderId: "26342987927",
  appId: "1:26342987927:web:23d9da7655e7c7a76271d2",
  measurementId: "G-3RQH3SCYGQ",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
