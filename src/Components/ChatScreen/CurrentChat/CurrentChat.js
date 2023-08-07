import React, {useState} from "react";
// import {Routes, Route} from 'react-router-dom';
import "./CurrentChat.css"
import MessageInput from "../MessageInput/MessageInput";

const CurrentChat = () => {
  const [messages, setMessages] = useState([
    { sender: "user", text: "Hello!" },
    { sender: "other", text: "Hi there!" },
    { sender: "user", text: "How are you?" },
    { sender: "other", text: "I'm great, thanks!" },
    // Add more messages here...
  ]);

  const handleSendMessage = (message) => {
    const newMessage = { sender: "user", text: message };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  return (
    <div className="chat">
      <div className="chat-screen">
      {messages.map((message, index) => (
        <div key={index} className={`message ${message.sender}`}>
          {message.text}
        </div>
      ))}
      </div>
    <div className="send-message">
      <MessageInput onSendMessage={handleSendMessage} />    
    </div>
    </div>
  );
}

export default CurrentChat;