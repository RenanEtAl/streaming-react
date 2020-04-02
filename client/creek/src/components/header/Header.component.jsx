import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "../googleAuth/GoogleAuth.component";
import "./Header.styles.css";

const Header = () => {
  return (
    <div className="header-container ui secondary pointing menu">
      <div className="creek-container">
        <Link to="/" className="item">
          CREEK
        </Link>
      </div>
      <div className="right menu">
        <GoogleAuth />
      </div>
    </div>
  );
};

export default Header;
