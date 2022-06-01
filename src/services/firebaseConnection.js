// Import the functions you need from the SDKs you need
// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/compat/database";
import 'firebase/auth';
import 'firebase/firestore';
import "firebase/database";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
let firebaseConfig = {
  apiKey: "AIzaSyAis-ogZ0l8GygktNk95ueFMLzCIYyiGrw",
  authDomain: "vitorf-2a488.firebaseapp.com",
  databaseURL: "https://vitorf-2a488-default-rtdb.firebaseio.com",
  projectId: "vitorf-2a488",
  storageBucket: "vitorf-2a488.appspot.com",
  messagingSenderId: "811667284264",
  appId: "1:811667284264:web:959e31827844a63bad301d",
  measurementId: "G-KCJ87123ST"
};

// Initialize Firebase
if (firebase.apps.length === 0) {
firebase.initializeApp(firebaseConfig);

}


export default firebase;
