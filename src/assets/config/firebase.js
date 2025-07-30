// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASMO4YNHGbJ8iIfceWLt7Puy1l1MO-_C8",
  authDomain: "vite-practice-d4eef.firebaseapp.com",
  projectId: "vite-practice-d4eef",
  storageBucket: "vite-practice-d4eef.firebasestorage.app",
  messagingSenderId: "436767915128",
  appId: "1:436767915128:web:c7d439597aa94716a9c18d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)