import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAq-fQkarpzRmx3hwksV8gNFdxo3xXS4Q4",
  authDomain: "realtime-chatapp-c6e33.firebaseapp.com",
  projectId: "realtime-chatapp-c6e33",
  storageBucket: "realtime-chatapp-c6e33.appspot.com",
  messagingSenderId: "56954317050",
  appId: "1:56954317050:web:f10b98eccd30482efe0143",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore(app);
