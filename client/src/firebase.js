// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth, GoogleAuthProvider} from"firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,

 authDomain: "genweb-9fb78.firebaseapp.com",
  projectId: "genweb-9fb78",
  storageBucket: "genweb-9fb78.firebasestorage.app",
  messagingSenderId: "298953430151",
  appId: "1:298953430151:web:41a08bff94cf3ee6a55422"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app)
const provider=new GoogleAuthProvider()
export {auth,provider}