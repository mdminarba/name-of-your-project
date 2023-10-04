// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzjjxkp3eynsbpQHSk7A7cMjZF9QJw4Js",
  authDomain: "fir-pectricse.firebaseapp.com",
  projectId: "fir-pectricse",
  storageBucket: "fir-pectricse.appspot.com",
  messagingSenderId: "643959978895",
  appId: "1:643959978895:web:07a7fad459a2b925c9a9fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;