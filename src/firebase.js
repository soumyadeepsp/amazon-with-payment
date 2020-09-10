import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB9T0SKZPjfesBW__AArWmjpN6gRIZ1SMY",
    authDomain: "fir-5c5da.firebaseapp.com",
    databaseURL: "https://fir-5c5da.firebaseio.com",
    projectId: "fir-5c5da",
    storageBucket: "fir-5c5da.appspot.com",
    messagingSenderId: "200002066868",
    appId: "1:200002066868:web:2d8d27e8f868e7b3403ae1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export {db, auth};