// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiert7Arxi6yfD9JioxtAEh7t50dE8VDM",
  authDomain: "user-authentication-83a09.firebaseapp.com",
  projectId: "user-authentication-83a09",
  storageBucket: "user-authentication-83a09.appspot.com",
  messagingSenderId: "1018309693980",
  appId: "1:1018309693980:web:2e7a101940a53d61edc5d9",
  measurementId: "G-RGZ98MY48W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app)