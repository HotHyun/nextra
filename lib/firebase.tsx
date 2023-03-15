import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyBdTZpvmERFhnKzmutj1mSiZSm7U9NiMx8",
  authDomain: "interactive-contents-web.firebaseapp.com",
  projectId: "interactive-contents-web",
  storageBucket: "interactive-contents-web.appspot.com",
  messagingSenderId: "309023836164",
  appId: "1:309023836164:web:af302f8586f110d8b74d51",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
export const database = firebase.database();

export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
