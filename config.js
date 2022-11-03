import firebase from 'firebase/compat/app';
import { initializeApp } from "firebase/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig={
    apiKey: "AIzaSyAV7KRAJMvWotAmb9a4kSCC1rLcd-1V2Gk",
    authDomain: "kuva-5e5ef.firebaseapp.com",
    projectId: "kuva-5e5ef",
    storageBucket: "kuva-5e5ef.appspot.com",
    messagingSenderId: "818879026903",
    appId: "1:818879026903:web:6122771b2818809fe0c292",
    measurementId: "G-77HSHKR6C7"
};
if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export {firebase};