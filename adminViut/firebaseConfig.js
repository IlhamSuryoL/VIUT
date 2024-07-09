import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";

// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAoul3mEpYHuaeidiL4JEv8DG7s8TMhSL0",
  authDomain: "ta-viut-app.firebaseapp.com",
  projectId: "ta-viut-app",
  storageBucket: "ta-viut-app.appspot.com",
  messagingSenderId: "563144788325",
  appId: "1:563144788325:web:35007ba1e1e827e6c7b98c",
  measurementId: "G-KKJ979TZQK"
};

const app = initializeApp(firebaseConfig);
export const FIRE_DB = getFirestore(app)

// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
