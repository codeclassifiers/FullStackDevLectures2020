import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Connection to remote fire base server
const firebaseConfig = {
  // TODO: Add your firebase config here
};

firebase.initializeApp(firebaseConfig);
// Method which allows to handle user authentication in our apps
export const auth = firebase.auth();
export const firestore = firebase.firestore();
