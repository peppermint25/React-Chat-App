import React from "react";
// import {Routes, Route} from 'react-router-dom';
import Header from "./Header/Header";
import CurrentChat from "./CurrentChat/CurrentChat";
import RecentChats from "./RecentChats/RecentChats";
import "./ChatScreen.css";

const ChatScreen = () => {

  return (
    <div className="chat-screen">
      <Header />
      <div className="main-container">
        <RecentChats />
        <CurrentChat />
      </div>
    </div>
  );
}

export default ChatScreen;