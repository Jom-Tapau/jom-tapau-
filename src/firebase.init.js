// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcbRdM-UeyHvlUxajCK41nPuviDhCl_68",
  authDomain: "jom-tapau-283ec.firebaseapp.com",
  projectId: "jom-tapau-283ec",
  storageBucket: "jom-tapau-283ec.appspot.com",
  messagingSenderId: "16582081655",
  appId: "1:16582081655:web:ee7cdc0f3cd02405901a72"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;