// MessageInput.js
import React, { useState } from "react";
import "./MessageInput.css";

const MessageInput = ({ onSendMessage }) => {
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <div className="message-input">
      <input
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
};

export default MessageInput;

