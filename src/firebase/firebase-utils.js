import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA7ohwwCvVMiTlRP5xnvAukMZkHBOM_wSI",
    authDomain: "e-commerce-db-1cc96.firebaseapp.com",
    databaseURL: "https://e-commerce-db-1cc96.firebaseio.com",
    projectId: "e-commerce-db-1cc96",
    storageBucket: "e-commerce-db-1cc96.appspot.com",
    messagingSenderId: "366919282713",
    appId: "1:366919282713:web:5277a43f448ffebac5fa88"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;