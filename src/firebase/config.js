// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5AmLyDKO3LpliKy5xAPgbI9nAB-n0SVI",
  authDomain: "firegram-26a92.firebaseapp.com",
  projectId: "firegram-26a92",
  storageBucket: "firegram-26a92.appspot.com",
  messagingSenderId: "342342168234",
  appId: "1:342342168234:web:96e203c3d965e6895f6ad3",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
