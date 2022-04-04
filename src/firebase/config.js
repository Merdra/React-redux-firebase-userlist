import { initializeApp } from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCc8ZIM4Cm3JVXVgqw3Dv_zyB2D3TYuGiQ",
  authDomain: "react-users-1e51a.firebaseapp.com",
  projectId: "react-users-1e51a",
  storageBucket: "react-users-1e51a.appspot.com",
  messagingSenderId: "3809337231",
  appId: "1:3809337231:web:96afee751f0d4bd45435fa"
};


const app = initializeApp(firebaseConfig);

export default app;