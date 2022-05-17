import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
   apiKey: "AIzaSyCR6FvyxYaOzPBbE9ikZ43kTqBzp-2m01M",
   authDomain: "resort-c2e77.firebaseapp.com",
   projectId: "resort-c2e77",
   storageBucket: "resort-c2e77.appspot.com",
   messagingSenderId: "1333336059",
   appId: "1:1333336059:web:7d53b22269a5ecdd419d5e"
 };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  export default firebase;