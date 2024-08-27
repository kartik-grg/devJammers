// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyALdSwiTDp4KxeIuDDGDFNOqDdLX6wOORY",
  authDomain: "gameverse-81e39.firebaseapp.com",
  projectId: "gameverse-81e39",
  storageBucket: "gameverse-81e39.appspot.com",
  messagingSenderId: "1008135535345",
  appId: "1:1008135535345:web:d52f73697d5cf19e148750",
  measurementId: "G-DB3Z8CHDXK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);