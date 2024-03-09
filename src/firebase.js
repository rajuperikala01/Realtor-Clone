// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAP19xmX5PEdp6yLWVTNigefEUQ96NUqyg",
  authDomain: "realtor-clone-90132.firebaseapp.com",
  projectId: "realtor-clone-90132",
  storageBucket: "realtor-clone-90132.appspot.com",
  messagingSenderId: "921485242446",
  appId: "1:921485242446:web:3e015ba8f00f3c478b931f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();