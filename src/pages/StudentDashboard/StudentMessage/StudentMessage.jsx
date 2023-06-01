import React from "react";
import { MessageImage1, Plus, ProfileImg, Search, Send } from "../../../assets";
import Message from "./studentMessage.module.css";
import { StudentData, messages } from "../../../Data/MessageData";



const StudentMessage = () => {
  return (
    <div className={Message.cont}>
      <div className={Message.long}>
        <input type="text" placeholder="Search" />
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

        {/* MAIN SECTION */}
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
                    flexDirection: "column",
                    alignItems:
                      message.status === "sender" ? "flex-end" : "flex-start",
                    width: "100%",
                    overflow: "hidden",
                  }}
                >
                  <div
                    className={Message.chat}
                    style={{
                      background:
                        message.status == "sender" ? "#3F75FF" : "white",
                      color: message.status == "sender" ? "white" : "black",
                    }}
                  >
                    <p>{message.text}</p>
                    <p>{message.para}</p>
                  </div>
                  <img src={message.image} height={40} width={40} alt="" />
                </div>
              ))}
            </div>
          </div>
          <div className={Message.mainThree}>
            <div className={Message.plus}>
              <img src={Plus} alt="" />
            </div>
            <input type="text" placeholder="Type a message...." />
            <img src={Send} alt="" className={Message.send} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentMessage;
