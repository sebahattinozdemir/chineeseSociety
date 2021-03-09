import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB3beWjzpM7O5XPz18hG7EeP6vP8GGK1Ow",
    authDomain: "chineese-society.firebaseapp.com",
    projectId: "chineese-society",
    storageBucket: "chineese-society.appspot.com",
    messagingSenderId: "858043187584",
    appId: "1:858043187584:web:2021572280dd264f520165",
    measurementId: "G-85GP8JR3P3"
});

const db = firebaseApp.firestore();

export default db;