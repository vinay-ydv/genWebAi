// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth, GoogleAuthProvider} from"firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "genwebai-9e84a.firebaseapp.com",
  projectId: "genwebai-9e84a",
  storageBucket: "genwebai-9e84a.firebasestorage.app",
  messagingSenderId: "689208421775",
  appId: "1:689208421775:web:55ac2a3eed1505d59faffa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app)
const provider=new GoogleAuthProvider()
export {auth,provider}