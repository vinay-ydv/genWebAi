// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth, GoogleAuthProvider} from"firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "ewgenkey.firebaseapp.com",
  projectId: "ewgenkey",
  storageBucket: "ewgenkey.firebasestorage.app",
  messagingSenderId: "864563624819",
  appId: "1:864563624819:web:6e56dd911eb64d6e34e306"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app)
const provider=new GoogleAuthProvider()
export {auth,provider}