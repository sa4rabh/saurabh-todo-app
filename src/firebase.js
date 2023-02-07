// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAje-Uh0gI9BX10erb53QCb60lfXQXGirA",
  authDomain: "todo-app-3325b.firebaseapp.com",
  projectId: "todo-app-3325b",
  storageBucket: "todo-app-3325b.appspot.com",
  messagingSenderId: "24640626716",
  appId: "1:24640626716:web:f33e38e5eeb8ec7eeeffd9",
  measurementId: "G-WYEY32PWY5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export {app,auth}