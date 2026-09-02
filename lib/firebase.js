import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAcMDGm1RVNv8PqEWNArKu3bVenzXEAHzQ",
  authDomain: "paw-forward-dc583.firebaseapp.com",
  projectId: "paw-forward-dc583",
  storageBucket: "paw-forward-dc583.firebasestorage.app",
  messagingSenderId: "281580011675",
  appId: "1:281580011675:web:05b155db4a168d469a863e",
};

// Avoid re-initializing on Next.js hot reload
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const db = getFirestore(app);
