import { AttachFile } from "@mui/icons-material";
import MoreVert from "@mui/icons-material/MoreVert";
import SearchOutlined from "@mui/icons-material/SearchOutlined";
import { Avatar, IconButton } from "@mui/material";
import React, { useState, useEffect } from "react";
import "./Chatbar.css";
import {
  doc,
  getDoc,
  onSnapshot,
  getDocs,
  collection,
  orderBy,
} from "@firebase/firestore";
import db from "./FirebaseConfig";
import MessageSender from "./MessageSender";

export default function Chatbar() {
  const [messages, setMessages] = useState([]);
  useEffect(
    () =>
      onSnapshot(collection(db, "allMessages"),orderBy("timestamp", "asec"), (snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        );
      }),
    []
  );

  return (
    <div className="chat ">
      <div className="chatHeader">
        <Avatar />
        <div className="chatHeaderInfo">
          <h3>Room Name</h3>
          <p>Last seen ...</p>
        </div>
        <div className="chatHeaderRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chatBody">
        {messages.map((msg) => (
          <p className="chatMsg sentMsg" key={msg.id}>
            <span className="chatName">Mamun</span>
            {msg.data.message}
            <span className="chatTimeStamp">{new Date().toUTCString()}</span>
          </p>
        ))}
      </div>
      <div className="chatFooter">
        <MessageSender />
      </div>
    </div>
  );
}