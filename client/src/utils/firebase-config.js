import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCK2zqh9k08ZFIuPxYaZeJ_TE-jNfUcACU",
  authDomain: "react-netflix-clone-3597e.firebaseapp.com",
  projectId: "react-netflix-clone-3597e",
  storageBucket: "react-netflix-clone-3597e.appspot.com",
  messagingSenderId: "761406108416",
  appId: "1:761406108416:web:98708cb37f72a04b1ab9e5",
  measurementId: "G-LZG00JVKBJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const fireBaseAuth = getAuth(app)