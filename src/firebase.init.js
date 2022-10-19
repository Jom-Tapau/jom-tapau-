// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCH0Tphf6vu-LFqmGcvHbTuwfq4MpcpzbQ",
  authDomain: "jom-tapau.firebaseapp.com",
  projectId: "jom-tapau",
  storageBucket: "jom-tapau.appspot.com",
  messagingSenderId: "778339822281",
  appId: "1:778339822281:web:8dc2cc375514590255fb18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;