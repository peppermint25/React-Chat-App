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
        {chat.messages.map((message, index) => {
            const isLastMessage =
              index === chat.messages.length - 1 ||
              chat.messages[index + 1].sender !== message.sender;

            return (
              <div
                key={index}
                className={`message ${message.sender === "user" ? "user" : "other"} ${
                  isLastMessage ? "last-message" : ""
                }`}
              >
                {message.text}
              </div>
            );
          })}
        </div>
      </div>
      <div className="send-message">
        <MessageInput onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
};

export default CurrentChat;
