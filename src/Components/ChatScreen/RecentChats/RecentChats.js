import React from "react";
import "./RecentChats.css"


const RecentChats = () => {
  return (
    <div className="recent-chats">
      <div className="search-and-new-chat">
        {/* <div className="search">
          <input id="search-bar" type="text" placeholder="Search" />
        </div> */}
        <div className="new-chat">
          <button id="new-chat">New Chat</button>
        </div>
      </div>
      <div className="chat-list">
        <div className="RecentChat">
          <div className="chat-info">
            <div className="ChatMessage">
              <p>Chat Message</p>
            </div>
          </div>
          <div className="DeleteChat">
            <button id="delete-chat">Delete Chat</button>
          </div>
        </div>
        <div className="RecentChat">
          <div className="chat-info">
            <div className="ChatMessage">
              <p>Chat Message 2</p>
            </div>
          </div>
          <div className="DeleteChat">
            <button id="delete-chat">Delete Chat</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecentChats;