// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDN-H5WZLizk8TDgJlCWRGl88BkD9uyQ_0",
  authDomain: "bten-assignment.firebaseapp.com",
  projectId: "bten-assignment",
  storageBucket: "bten-assignment.appspot.com",
  messagingSenderId: "977698668057",
  appId: "1:977698668057:web:a1c5e3b561e61075f0b488"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)