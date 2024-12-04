// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCU9b-hj68wUUyrUYUxC8hHkPZKOjyC1hA",
  authDomain: "news-de0f0.firebaseapp.com",
  projectId: "news-de0f0",
  storageBucket: "news-de0f0.firebasestorage.app",
  messagingSenderId: "1030364603079",
  appId: "1:1030364603079:web:fdfc340721153a0846d4e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;