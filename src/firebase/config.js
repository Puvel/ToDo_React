import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBt44OzWfNTEEVTnJk5pG1NUl_GRgaa-x4",
  authDomain: "react-project-5314c.firebaseapp.com",
  databaseURL: "https://react-project-5314c.firebaseio.com",
  projectId: "react-project-5314c",
  storageBucket: "react-project-5314c.appspot.com",
  messagingSenderId: "649185374827",
  appId: "1:649185374827:web:3ed9e1282740017dfff72e",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
const auth = firebase.auth();

export { firestore, auth };

