import firebase from 'firebase/app';
import 'firebase/firestore';

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: "AIzaSyDvTT6kmNK-pVDBijIpwn5vWEmWlAQYmnI",
  authDomain: "survey-app-bed2c.firebaseapp.com",
  projectId: "survey-app-bed2c",
});

const db = firebase.firestore();

export { firebase, db };
