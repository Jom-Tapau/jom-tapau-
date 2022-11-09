// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDc5V1hU-bPDBt5qTCSWrpvThiqtBeS0Vc",
  authDomain: "jomtapau-5fc44.firebaseapp.com",
  projectId: "jomtapau-5fc44",
  storageBucket: "jomtapau-5fc44.appspot.com",
  messagingSenderId: "728424156957",
  appId: "1:728424156957:web:ebf1d0b1f60d6e16ec5bf4",
  measurementId: "G-Y8N6VJFD2P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;