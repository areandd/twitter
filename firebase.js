
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmmrktVUEckCkqS7rnYH9IfWXKxOW41Ro",
  authDomain: "twitter-28471.firebaseapp.com",
  projectId: "twitter-28471",
  storageBucket: "twitter-28471.appspot.com",
  messagingSenderId: "472907755627",
  appId: "1:472907755627:web:e0e7ae1d69bdde29a4c12e"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };


