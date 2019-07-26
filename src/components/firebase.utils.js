import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBq7k5Da2igorOIed40KBQwLUYYMcbCDGY",
  authDomain: "clothingshop-b3548-d684a.firebaseapp.com",
  databaseURL: "https://clothingshop-b3548-d684a.firebaseio.com",
  projectId: "clothingshop-b3548",
  storageBucket: "",
  messagingSenderId: "555389398718",
  appId: "1:555389398718:web:49b94fb9061260f9"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
