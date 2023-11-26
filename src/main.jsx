import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ChakraProvider } from '@chakra-ui/react'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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



ReactDOM.createRoot(document.getElementById('root')).render(
  
  <ChakraProvider>
    
    <App />
  </ChakraProvider>
)
