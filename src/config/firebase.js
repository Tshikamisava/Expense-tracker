import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyAbpWVvwcpkmcUqteQAfxPD8dlQf937EEE",
  authDomain: "expense-tracker-8b6db.firebaseapp.com",
  projectId: "expense-tracker-8b6db",
  storageBucket: "expense-tracker-8b6db.appspot.com",
  messagingSenderId: "566611145658",
  appId: "1:566611145658:web:03e822220f67fc68b06383",
  measurementId: "G-Y10F5NRH2R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const db = getFirestore(app);

export {auth , db}