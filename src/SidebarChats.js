// import { Avatar } from '@material-ui/core';
import React from "react";
import "./SidebarChats.css";

const SideBarChats = () => {
  return (
    <div className="sidebar-chat">
      {/* <Avatar/> */}
      <div className="sidebar-chatInfo">
        <h2>room name</h2>
        <p>last message</p>
      </div>
    </div>
  );
};

export default SideBarChats;
