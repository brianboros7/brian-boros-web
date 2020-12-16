import { createContext } from 'react';
import firebase from 'firebase'; 

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDzx71_Fcw3cBtIX7ZeavmleH3iCyFHvQ4",
    authDomain: "brian-boros-web-a5cbf.firebaseapp.com",
    databaseURL: "https://brian-boros-web-a5cbf-default-rtdb.firebaseio.com",
    projectId: "brian-boros-web-a5cbf",
    storageBucket: "brian-boros-web-a5cbf.appspot.com",
    messagingSenderId: "419996106019",
    appId: "1:419996106019:web:ae2e358f4946bdc640e096",
    measurementId: "G-D7ECP24HVG"
  }
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics() 


export default firebase 
export const FirebaseContext = createContext(null);