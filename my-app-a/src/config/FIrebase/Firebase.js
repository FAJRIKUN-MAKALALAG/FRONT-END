// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6hEKN0lkBNjH2NwLQGXM18ECGjKpb3DE",
  authDomain: "frontend-8eafe.firebaseapp.com",
  projectId: "frontend-8eafe",
  storageBucket: "frontend-8eafe.firebasestorage.app",
  messagingSenderId: "223425672257",
  appId: "1:223425672257:web:7520263dc885ceb5b242c0",
  measurementId: "G-N1CRRJQ8RV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
