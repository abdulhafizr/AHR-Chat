import firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDt-yJoCTNrM11W9NsYnoTYqsn3dfr1Bac",
    authDomain: "ahr-chat-de2b8.firebaseapp.com",
    projectId: "ahr-chat-de2b8",
    storageBucket: "ahr-chat-de2b8.appspot.com",
    messagingSenderId: "179796544020",
    appId: "1:179796544020:web:bdf68dcc3c790a4a8bf501",
    measurementId: "G-ENT3R4TVVN"
};

firebase.initializeApp(firebaseConfig);

export default firebase;