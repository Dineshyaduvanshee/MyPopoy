// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChESB_Fo3GK74EgDiQTGE8sefqMUXdFog",
  authDomain: "nth-rookery-340005.firebaseapp.com",
  projectId: "nth-rookery-340005",
  storageBucket: "nth-rookery-340005.appspot.com",
  messagingSenderId: "645280951722",
  appId: "1:645280951722:web:edf9798eb0d395bf4d4fd3",
  measurementId: "G-X07KX6CSVR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);