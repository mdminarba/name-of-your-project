// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwN79ZcTheJgQzmbX6yWdLQ7cHMA-yMM4",
  authDomain: "name-of-your-project-47ea3.firebaseapp.com",
  projectId: "name-of-your-project-47ea3",
  storageBucket: "name-of-your-project-47ea3.appspot.com",
  messagingSenderId: "287901150703",
  appId: "1:287901150703:web:88ce2ad48df95a22615a1a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth