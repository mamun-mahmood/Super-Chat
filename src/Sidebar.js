import { Avatar, IconButton } from "@mui/material";
import React from "react";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import SearchOutline from "@mui/icons-material/SearchOutlined";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SidebarChats from "./SidebarChats";
import "./Sidebar.css";
import { doc, setDoc, getDoc, getFirestore } from "firebase/firestore";
import db from "./FirebaseConfig";

export default function Sidebar() {
  const myFirstData = doc(db, "fromUI/today6-10");
  function writedataOnServer() {
    const docData = {
      description: "You son of a bitch. This moduler version sucks",
      name: "Unknown",
    };
    setDoc(myFirstData, docData);
  }
  writedataOnServer(); //
  async function readDocument() {
    const mySnapshot = await getDoc(myFirstData);
    if (mySnapshot.exists()) {
      const docData = mySnapshot.data();
      // console.log(`My data is ${JSON.stringify(docData)}`);
    }
  }
  readDocument();
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <Avatar />
        <div className="sidebar-headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar-search">
        <div className="sidebar-searchContainer">
          <SearchOutline />
          <input type="text" placeholder="search here" />
        </div>
      </div>
      <div className="sidebar-chats">
        <SidebarChats />
        <SidebarChats />
        <SidebarChats />
        <SidebarChats />
        <SidebarChats />
        <SidebarChats />
      </div>
    </div>
  );
}
