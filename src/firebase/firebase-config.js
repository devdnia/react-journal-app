import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9mZYbbVuRAPL51zbjyYd2c9EKTkc4t84",
  authDomain: "react-journal-c2b21.firebaseapp.com",
  projectId: "react-journal-c2b21",
  storageBucket: "react-journal-c2b21.appspot.com",
  messagingSenderId: "832643808853",
  appId: "1:832643808853:web:75662cf3bdd4d551af5edc"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Database configuration
const db = firebase.firestore();

// Auth configuration
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}