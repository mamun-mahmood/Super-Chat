import { addDoc, collection } from "@firebase/firestore";
import { InsertEmoticon, Mic } from "@mui/icons-material";
import React, { useState } from "react";
import db from "./FirebaseConfig";

export default function MessageSender() {
  const [input, setInput] = useState("");
  async function sendMessage (e) {
    e.preventDefault();
    const docRef = await addDoc(collection(db, "allMessages"), {
      message: input,
      time: Date.now(),
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
