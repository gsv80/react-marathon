import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
    apiKey: "AIzaSyB74-WW-7njwHwQvYfSzS-I_xtSJ9Cdw1c",
    authDomain: "pokemon-game-19f73.firebaseapp.com",
    databaseURL: "https://pokemon-game-19f73-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "pokemon-game-19f73",
    storageBucket: "pokemon-game-19f73.appspot.com",
    messagingSenderId: "428168442141",
    appId: "1:428168442141:web:c6d78bf795fa079b33b1f4"
  };
  
  
  firebase.initializeApp(firebaseConfig);

export const fire = firebase;
export const database = fire.database();

export default database;
