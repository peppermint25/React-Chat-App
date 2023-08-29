import { React, useState, useEffect} from "react";
import { useNavigate, useParams} from 'react-router-dom';
import Header from "./Header/Header";
import CurrentChat from "./CurrentChat/CurrentChat";
import RecentChats from "./RecentChats/RecentChats";
import "./ChatScreen.css";
import { v4 as uuidv4 } from 'uuid';

const InitialChats = [
  {
    id: uuidv4(),
    messages: [
      { sender: "user", text: "Hello!" },
      { sender: "other", text: "Hi there!" },
      { sender: "user", text: "How are you?" },
      { sender: "other", text: "I'm great, thanks!" },
      { sender: "user", text: "chat" },
      { sender: "user", text: "chat" },
      { sender: "user", text: "this is the last message aaa" },
      { sender: "other", text: "Hi there!" },
      { sender: "other", text: "Hi there!" },

    ],
  },
  {
    id: uuidv4(),
    messages: [
      { sender: "user", text: "Hello!" },
      { sender: "other", text: "Hi there!" },
      { sender: "user", text: "How are you?" },
      { sender: "other", text: "I'm great, thanks!" },
      { sender: "user", text: "chat5" },

    ],
  },
]

const ChatScreen = () => {
  const [chats, setChats] = useState(InitialChats);
  const [selectedChat, setSelectedChat] = useState(chats[0]);
  const navigate = useNavigate();
  const { chatId } = useParams();

  useEffect(() => {
    if (chatId) {
      const selectedChat = chats.find((chat) => chat.id === chatId);
      setSelectedChat(selectedChat);
    }

  }, [chatId, chats]);

  useEffect(() => {
    if (chats.length > 0 && !selectedChat) {
      setSelectedChat(chats[0]);
    }
  }, [chats, selectedChat]);
  

  const handleChatClick = (chatId) => {
    const selectedChat = chats.find((chat) => chat.id === chatId);
    console.log("selected chat", selectedChat);
    setSelectedChat(selectedChat);
    navigate(`/chat/${chatId}`);
  };

  const handleNewChat = (newChat) => {
    setChats((prevChats) => [newChat, ...prevChats]);
    setSelectedChat(newChat);
    navigate(`/chat/${newChat.id}`);
  };

  const handleDeleteChat = (chatId) => {
    const updatedChats = chats.filter((chat) => chat.id !== chatId);

    if (selectedChat && selectedChat.id === chatId) {
      setSelectedChat(null);
    }

    setChats(updatedChats);
  };

  const handleSendMessage = (chatId, message) => {

    const selectedChat = chats.find((chat) => chat.id === chatId);
    // console.log(selectedChat.messages);

    const MessagesArray = selectedChat.messages
    const updatedMessages = [...MessagesArray, { sender: "user", text: message }];
    selectedChat.messages = updatedMessages;
    console.log("curent Chat", selectedChat);

    // selectedChat = []
    // console.log(selectedChat);
    
    // setChats([selectedChat]);
    
  
    
    setChats(chats.map((chat) =>{
          if(chat.id === chatId) { 
            return selectedChat;
          }else {
            return chat;
          }
        }
    ));

    

    console.log("chats", chats);

    // const restOfChats = updatedChats.filter((chat) => chat.id !== chatId);
  
    // setChats([selectedChat, ...restOfChats]);
    setSelectedChat(selectedChat);
  };

  return (
    <div className="chat-screen">
      <Header />
      <div className="main-container">
        <RecentChats
          chats={chats}
          onChatClick={handleChatClick}
          onNewChat={handleNewChat}
          onDeleteChat={handleDeleteChat}
          setChats={setChats}
        />
        {selectedChat ?(
          <CurrentChat chat={selectedChat} onSendMessage={handleSendMessage} />
        ) : (
          <div className="no-chat-selected">
            <h2>No chat selected</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default ChatScreen;