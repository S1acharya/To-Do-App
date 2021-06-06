import firebase from 'firebase/app'
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyD_GsbtNm483OPsNapu5i06cyJa9_uk_cw",
    authDomain: "to-do-app-5c102.firebaseapp.com",
    projectId: "to-do-app-5c102",
    storageBucket: "to-do-app-5c102.appspot.com",
    messagingSenderId: "334288083647",
    appId: "1:334288083647:web:ac12f90002edfe8ec8840a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  export {db};