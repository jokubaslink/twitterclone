// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDJhWDpYPJUCYHkewEWxepb076xGEM7K9Y",
    authDomain: "twitter-clone-94c51.firebaseapp.com",
    projectId: "twitter-clone-94c51",
    storageBucket: "twitter-clone-94c51.appspot.com",
    messagingSenderId: "328967078112",
    appId: "1:328967078112:web:9f1536347d22c5aa095085"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
