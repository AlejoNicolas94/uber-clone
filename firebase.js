import { initializeApp } from "firebase/app";
import {GoogleAuthProvider,getAuth} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAP-_ZRuxUSxmIs0yxN0zlk0laNdp60bJQ",
  authDomain: "uber-next-clone-live-92e4a.firebaseapp.com",
  projectId: "uber-next-clone-live-92e4a",
  storageBucket: "uber-next-clone-live-92e4a.appspot.com",
  messagingSenderId: "690882481534",
  appId: "1:690882481534:web:7106570506d7ddd2f3f72f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export {app, provider, auth}