// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRzIwGDpAK92rIoKOU7xgko1P_mTmtBHY",
  authDomain: "relivv-96de8.firebaseapp.com",
  projectId: "relivv-96de8",
  storageBucket: "relivv-96de8.appspot.com",
  messagingSenderId: "716232041172",
  appId: "1:716232041172:web:e8f52630ad8f862af7d141",
  measurementId: "G-VJEY0CR7MD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);