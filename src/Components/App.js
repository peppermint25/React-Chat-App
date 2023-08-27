import React from 'react';
import {
        BrowserRouter as Router,
        Routes,
        Route,
        } from 'react-router-dom';
import ChatScreen from './ChatScreen/ChatScreen';
import Auth from './Auth/Auth';
import FileUpload from './FileUpload/FileUpload';

const App = () => {




  return (
    <div className='App'>
      {/* <ChatScreen /> */}
      <Router>
        <Routes>
          <Route path='/' element={<Auth />}/>
          <Route path='/chat' element={<ChatScreen />} />
          <Route path='/chat/:chatId' element={<ChatScreen />}/>
          <Route path='/files' element={<FileUpload />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
