// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzNhJmdJn6NflGWg35yFEPBwOL4n0xuIE",
  authDomain: "sih2023-3c557.firebaseapp.com",
  projectId: "sih2023-3c557",
  storageBucket: "sih2023-3c557.appspot.com",
  messagingSenderId: "1078746143478",
  appId: "1:1078746143478:web:b5d82b112b89a02975ead7",
  measurementId: "G-R7VNJKFMNE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);