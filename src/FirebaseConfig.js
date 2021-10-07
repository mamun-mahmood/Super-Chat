import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyARTiuKzguCeSQat1jqyhtCT7a2vJ-S8O0",
  authDomain: "molten-crowbar-308222.firebaseapp.com",
  projectId: "molten-crowbar-308222",
  storageBucket: "molten-crowbar-308222.appspot.com",
  messagingSenderId: "117348219300",
  appId: "1:117348219300:web:907256030c53730125e931"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth, provider};
const db = getFirestore();
export default db;