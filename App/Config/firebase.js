import * as firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: "AIzaSyBJFvZq34uSbojdnywHdAxf4KcSqnLJz1E",
  authDomain: "chatapp-3ddcc.firebaseapp.com",
  databaseURL: "https://chatapp-3ddcc.firebaseio.com",
  projectId: "chatapp-3ddcc",
  storageBucket: "chatapp-3ddcc.appspot.com",
  messagingSenderId: "11294910092"
};
firebase.initializeApp(config);

export default firebase;
