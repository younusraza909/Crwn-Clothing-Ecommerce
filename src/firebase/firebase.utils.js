import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAahQlzYbl0FjyA93xpeQ5CY1FHUiyOI7s",
  authDomain: "crwn-clothing-db-f2925.firebaseapp.com",
  databaseURL: "https://crwn-clothing-db-f2925.firebaseio.com",
  projectId: "crwn-clothing-db-f2925",
  storageBucket: "crwn-clothing-db-f2925.appspot.com",
  messagingSenderId: "365432552277",
  appId: "1:365432552277:web:99defa3c69e4a0afc80ddc",
  measurementId: "G-SLJLKDTDHY",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//Setting google signin utilitis
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
