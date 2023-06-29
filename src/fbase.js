import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBJ8Mok-eQWFT1tMYUECqAwJ5NDRAV3DiA",
  authDomain: "switter-c2d59.firebaseapp.com",
  projectId: "switter-c2d59",
  storageBucket: "switter-c2d59.appspot.com",
  messagingSenderId: "602297598664",
  appId: "1:602297598664:web:d3f154a8da0b6e7aa81bfd",
};

const app = firebase.initializeApp(firebaseConfig);
export const firebaseInstance = firebase;
export const authService = firebase.auth();
export const dbService = firebase.firestore();
export const storageService = firebase.storage();
