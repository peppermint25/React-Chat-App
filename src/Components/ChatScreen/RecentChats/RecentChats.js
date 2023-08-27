import React from "react";
import "./RecentChats.css";
import { v4 as uuidv4 } from "uuid";
import { useNavigate, Link, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePlus } from "@fortawesome/free-regular-svg-icons";

const RecentChats = ({ chats, onChatClick, onNewChat, onDeleteChat, setChats }) => {
  const navigate = useNavigate();
  const { chatId } = useParams();

  const handleChatClick = (chatId) => {
    onChatClick(chatId);
    navigate(`/chat/${chatId}`);
  };

  const handleNewChat = () => {
    const newChat = {
      id: uuidv4(),
      messages: [],
    };
    onNewChat(newChat);
  };

  const handleDeleteChat = (chatId) => {
    onDeleteChat(chatId);
  };

  return (
    <div className="recent-chats">
      <div className="search-and-new-chat">
        <button id="new-chat" onClick={handleNewChat}>
            <FontAwesomeIcon icon={faSquarePlus} />  
        </button>
      </div>
      <div className="chat-list">
        {chats.map((chat) => (
          <Link
            to={`/chat/${chat.id}`}
            key={chat.id}
            className={`RecentChat ${chat.id === chatId ? "active" : ""}`}            onClick={() => handleChatClick(chat.id)}
          >
            <div className="chat-info">
              <div className="ChatMessage">
                <p>{chat.messages.length > 0 ? truncateText(chat.messages[chat.messages.length - 1]?.text, 30) : "New Chat"}</p>
              </div>
            </div>
            <div className="file-delete">
              <button onClick={() => handleDeleteChat(chat.id)}>
                <div className="delete-icon"></div>
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

const truncateText = (text, limit) => {
  if (text.length <= limit) {
    return text;
  }

  const truncatedText = text.substring(0, limit);
  const lastSpaceIndex = truncatedText.lastIndexOf(" ");

  return truncatedText.substring(0, lastSpaceIndex) + "...";
};

export default RecentChats;
