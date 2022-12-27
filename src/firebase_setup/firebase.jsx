// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-1ZwoQ-gk194cLN5NSqGisxcslBXXldg",
  authDomain: "ganttly-63edd.firebaseapp.com",
  projectId: "ganttly-63edd",
  storageBucket: "ganttly-63edd.appspot.com",
  messagingSenderId: "270053436913",
  appId: "1:270053436913:web:a4d7ab358577b531d32850",
  measurementId: "G-0MM3C5E0Q1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const analytics = getAnalytics(app);
