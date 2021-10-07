import { AttachFile, InsertEmoticon } from "@mui/icons-material";
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
} from "@firebase/firestore";
import db from "./FirebaseConfig";
import MessageSender from "./MessageSender";

export default function Chatbar() {
  const [messages, setMessages] = useState([]);
  const messageCollection = doc(db, "allMessages/2021-10-06");
  function readDocument() {
    onSnapshot(getDocs(db, "allMessages"), (doc) => {
      setMessages(doc.data().message);
    });
  }
  useEffect(() => {
    async function getAllData() {
      const querySnapshot = await getDocs(db, 'allMessages')
      setMessages(
        querySnapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
      );
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        setMessages(doc.data())
      });
    }
    getAllData();
  }, []);
  console.log(messages);
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
        {messages.map((msg) =>
          <p className="chatMsg" key={msg.id}>
            <span className="chatName">Mamun</span>
            {msg.data.message}
            <span className="chatTimeStamp">{new Date().toUTCString()}</span>
          </p>
        )}
      </div>
      <div className="chatFooter">
        <MessageSender />
      </div>
    </div>
  );
}
