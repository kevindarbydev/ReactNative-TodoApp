import * as firebase from "firebase";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEfpRM-lDe9lgHvKHKGPlybrrBufEmtt8",
  authDomain: "gamifiedtodo.firebaseapp.com",
  projectId: "gamifiedtodo",
  storageBucket: "gamifiedtodo.appspot.com",
  messagingSenderId: "248499806934",
  appId: "1:248499806934:web:8679ddfc81f7704bd29f77",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };
