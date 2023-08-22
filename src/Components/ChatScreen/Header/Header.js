import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = () => {
  const navigate = useNavigate();

  const LogOut = () => {
    navigate('/')

  };

  const Files = () => {
    navigate('/files')

  };

  const Chat = () => {
    navigate('/chat')

  };

  return (
    <header>
      {/* Company Logo */}
      <div className="company-logo" onClick={Chat}>
        {/* Add your company logo image here */}
        <img src="/path/to/your/company-logo.png" alt="[Logo img]" />
        <span id="company-name">[name]</span>
      </div>

      <div className="button-bar">
        <button onClick={Files}>Files</button>
        <button onClick={LogOut}>
          <FontAwesomeIcon icon="fa-solid fa-arrow-right-from-bracket" />
          Sign Out</button>
      </div>
    </header>
  );
}

export default Header;