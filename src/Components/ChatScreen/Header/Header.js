import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      {/* Company Logo */}
      <div className="company-logo">
        {/* Add your company logo image here */}
        <img src="/path/to/your/company-logo.png" alt="Company Logo" />
      </div>

      {/* Sign Up/Sign In Button */}
      <div className="auth-buttons">
        {/* Add your sign-up/sign-in button code here */}
        <button>Sign Out</button>
      </div>
    </header>
  );
}

export default Header;