// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0NyjiSL4Hc64TMz7acsdgu7ptoh5-mYo",
  authDomain: "inkpress-88fd7.firebaseapp.com",
  projectId: "inkpress-88fd7",
  storageBucket: "inkpress-88fd7.firebasestorage.app",
  messagingSenderId: "251404096883",
  appId: "1:251404096883:web:d26d7250aa15c03575a106",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
