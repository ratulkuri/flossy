import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC0Sd-W6JaDFneB5ifbGlGWKWgfBQ7gHqE",
    authDomain: "flossy-db.firebaseapp.com",
    databaseURL: "https://flossy-db.firebaseio.com",
    projectId: "flossy-db",
    storageBucket: "flossy-db.appspot.com",
    messagingSenderId: "681794822018",
    appId: "1:681794822018:web:354f039d9d0658b264399b"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt : 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);