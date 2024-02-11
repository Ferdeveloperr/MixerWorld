// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAuhqTEUfJsRfkOwDR8xeKMlgOcaYuo-qA",
    authDomain: "mixerworldapp.firebaseapp.com",
    projectId: "mixerworldapp",
    storageBucket: "mixerworldapp.appspot.com",
    messagingSenderId: "755768342938",
    appId: "1:755768342938:web:479420e29e7cb429416223"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);