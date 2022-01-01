// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDN3t0TX-HtmhJdmO4gqPQPOE1Vg7lWfZk",
  authDomain: "disney-plus-daa04.firebaseapp.com",
  projectId: "disney-plus-daa04",
  storageBucket: "disney-plus-daa04.appspot.com",
  messagingSenderId: "844582753900",
  appId: "1:844582753900:web:6d7dbac9c7618170902a49",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, provider, auth };