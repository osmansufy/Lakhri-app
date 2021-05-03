import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBFzLhPHS87NtzutbAp7ekNdhm7g6Fi5Ug",
  authDomain: "lakhri-app.firebaseapp.com",
  projectId: "lakhri-app",
  storageBucket: "lakhri-app.appspot.com",
  messagingSenderId: "817847406629",
  appId: "1:817847406629:web:1ef393f22a1d2267942fcc",
  measurementId: "G-DLT2M3QKKV",
};

firebase.initializeApp(firebaseConfig);
export default firebase;
