// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

import "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAB6DnRYunnSX2J3PA8dvKPji5Os52Dfoo",
  authDomain: "orramo-fintech.firebaseapp.com",
  databaseURL: "https://orramo-fintech-default-rtdb.firebaseio.com",
  projectId: "orramo-fintech",
  storageBucket: "orramo-fintech.appspot.com",
  messagingSenderId: "969938889450",
  appId: "1:969938889450:web:bcefc3ebbaaf70b8c6c593"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

// Initialize Firebase

export { app , db}