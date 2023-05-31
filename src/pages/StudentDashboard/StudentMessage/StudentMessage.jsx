import React from "react";
import { MessageImage1, Search } from "../../../assets";
import Message from "./studentMessage.module.css";
import { StudentData } from "../../../Data/MessageData";

const messages = [
  {
    text: "Mr. Drew Teachston",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    status: "receiver",
  },
  {
    text: "",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    status: "sender",
  },
  {
    text: "Mr. Drew Teachston",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    status: "receiver",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ",
    para: "dgdjfkv",
    status: "sender",
  },
];

const StudentMessage = () => {
  return (
    <div>
      <div>
        <input type="text" />
      </div>
      <div className={Message.wrap}>
        <div className={Message.nav}>
          <h2>Messages</h2>
          <div className={Message.ash}>
            <div>
              <p>Tutors</p>
            </div>
            <p>Class groups</p>
          </div>

          <div className={Message.input}>
            <input type="text" placeholder="search" />
            <img src={Search} alt="" />
          </div>
          <div>
            {StudentData.map((item, index) => (
              <div
                key={index}
                className={Message.box}
                style={{
                  background: item.active == "yes" ? "#EFF2F8" : "",
                }}
              >
                <img src={item.image} alt="" />
                <div>
                  <p>{item.name}</p>
                  <p>{item.track}</p>
                  <p>{item.para}</p>
                </div>
                <span
                  style={{
                    display: item.active == "yes" ? "block" : "none",
                  }}
                >
                  4
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className={Message.main}>
          <div className={Message.mainOne}>
            <img src={MessageImage1} alt="" />
            <div>
              <h3>Mr. Drew Teachston</h3>
              <div style={{ display: "flex", alignItems: "center" }}>
                <span></span>
                <p> Online</p>
              </div>
            </div>
          </div>
          <div className={Message.mainTwo}>
            <p style={{ textAlign: "center" }}>17th March</p>
            <div>
              {messages.map((message, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    justifyContent:
                      message.status == "sender" ? "flex-end" : "flex-start",
                    width: "100%",
                  }}
                >
                  <div
                    className={Message.chat}
                    style={{
                      background: message.status == "sender"
                        ? "#3F75FF"
                        : "white",
                      color: message.status == "sender" ? "white" : "black",
                    }}
                  >
                    <p>{message.text}</p>
                    <p>{message.para}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={Message.mainThree}>
            <input type="text" placeholder="Type a message...." />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentMessage;
