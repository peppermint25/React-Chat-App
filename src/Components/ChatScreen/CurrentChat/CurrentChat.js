import React from "react";
import "./CurrentChat.css";
import MessageInput from "../MessageInput/MessageInput";


const CurrentChat = ({ chat, onSendMessage }) => {
  
  const handleSendMessage = (message) => {
    if (message.trim() !== "") {
      onSendMessage(chat.id, message);
    }
  };

  return (
    <div className="chat">
      <div className="message-screen">
        <div className="message-list">
          {chat.messages.map((message, index) => (
            <div
              key={index}
              className={`message ${message.sender === "user" ? "user" : "other"}`}
            >
              {message.text}
            </div>
          ))}
        </div>
      </div>
      <div className="send-message">
        <MessageInput onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
};

export default CurrentChat;
