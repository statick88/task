import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAP1QBMIENN9-lhcS5BYzLnKoMHLPMkS7A",
  authDomain: "auth-react-45edc.firebaseapp.com",
  projectId: "auth-react-45edc",
  storageBucket: "auth-react-45edc.appspot.com",
  messagingSenderId: "744478237300",
  appId: "1:744478237300:web:3bb2e9cddb1052934b6721"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);