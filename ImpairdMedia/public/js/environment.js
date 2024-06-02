// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.6.6/firebase-analytics.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSlF2Ihti9kMqrVYWOoiWScyWzq9lNik4",
  authDomain: "impaird-media.firebaseapp.com",
  projectId: "impaird-media",
  storageBucket: "impaird-media.appspot.com",
  messagingSenderId: "287620996349",
  appId: "1:287620996349:web:49473f5380718ed3bf7294"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
