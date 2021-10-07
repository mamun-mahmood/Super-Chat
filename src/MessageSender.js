import { doc, setDoc, addDoc, collection } from "@firebase/firestore";
import { InsertEmoticon, Mic } from "@mui/icons-material";
import React, { useState } from "react";
import db from "./FirebaseConfig";

export default function MessageSender() {
  const [input, setInput] = useState("");
  const messageCollection = doc(db, "allMessages/2021-10-06");
  // const sendMessage = (e) => {
  //   e.preventDefault();
  //   const docData = {
  //     message: input,
  //     time: new Date(),
  //   };
  //   setDoc(messageCollection, docData);
  //   setInput('');
  // };
  async function sendMessage (e) {
    e.preventDefault();
    const docRef = await addDoc(collection(db, "allMessages"), {
      message: input,
      time: new Date(),
    });
    setInput('');
  }
  return (    <>
      <div className="chatFooterIcon">
        <InsertEmoticon />
      </div>
      <form>
        <input
          placeholder="Type a message..."
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={sendMessage} type="submit">
          Submit
        </button>
      </form>
      <div className="chatFooterIcon">
        <Mic />
      </div>
    </>
  );
}
