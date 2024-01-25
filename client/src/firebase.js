// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-d5c0a.firebaseapp.com",
  projectId: "mern-estate-d5c0a",
  storageBucket: "mern-estate-d5c0a.appspot.com",
  messagingSenderId: "790151191802",
  appId: "1:790151191802:web:57ace8f0c452e759063d43",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
