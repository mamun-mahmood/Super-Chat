import React from "react";
import "./Header.css";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import { signInWithPopup } from "firebase/auth";
import db, { auth, provider } from "./FirebaseConfig";
import { collection, doc, getDocs } from "firebase/firestore";

export default function Header() {
  const signIn = () => {
    signInWithPopup(auth, provider).then((res) => {
      console.log(res);
    });
  };
  async function f4() {
    try {
      const querySnapshot = await getDocs(collection(db, "cities"));
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
      });
    } catch (e) {
      console.error(e); // 30
    }
  }
  f4();
  return (
    <div className="header">
      <div className="header_left">
        <MailOutlineIcon />
        <p>Messaging</p>
      </div>
      <input type="text" />
      <div>
        <NotificationsNoneIcon />
        <div onClick={() => signIn()}>
          <AccountCircleIcon />
        </div>
      </div>
    </div>
  );
}
