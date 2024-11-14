import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAQ2jWQWY-swQekpkNk4G1F8WVCihIofYM",
  authDomain: "ecommerce-electrohogar.firebaseapp.com",
  projectId: "ecommerce-electrohogar",
  storageBucket: "ecommerce-electrohogar.firebasestorage.app",
  messagingSenderId: "58529880254",
  appId: "1:58529880254:web:9a00120f656afa292ee6ef"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore()

export default db