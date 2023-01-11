// Import the functions you need from the SDKs you need
// import * as firebase from "firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnv6zXJD_nrpX7d-F4AZ9Bsp6UyQPAe1g",
  authDomain: "gym-tracker-f0e08.firebaseapp.com",
  projectId: "gym-tracker-f0e08",
  storageBucket: "gym-tracker-f0e08.appspot.com",
  messagingSenderId: "586152666086",
  appId: "1:586152666086:web:f0cd3ec28b1a70ab576c27"
};

// Initialize Firebase
let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app();
}

const auth = firebase.auth();
export { auth };