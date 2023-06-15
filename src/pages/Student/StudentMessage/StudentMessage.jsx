import React from "react";
import { MessageImage1, Plus, ProfileImg, Search, Send } from "../../../assets";
import Message from "./studentMessage.module.css";
import { StudentData, messages } from "../../../Data/MessageData";
import UserDashboardNav from "../../../components/UserDashboardNav/UserDashboardNav";

const StudentMessage = () => {
  return (
    <div className={Message.cont}>
      <UserDashboardNav navTitle = "Messages"/>
      <div className= {Message.messageContainer}>
        <p>No Chats</p>
      </div>
      
    </div>
  );
};

export default StudentMessage;
