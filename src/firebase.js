import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmcxlt6ToMZue6KdO2R-8qpxcC_UOpovc",
  authDomain: "clone-90758.firebaseapp.com",
  projectId: "clone-90758",
  storageBucket: "clone-90758.appspot.com",
  messagingSenderId: "1087152897437",
  appId: "1:1087152897437:web:531decbc76d7e31988c374"
  };

  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);


  