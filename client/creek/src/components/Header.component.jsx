import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth.component";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        CREEK
      </Link>
      <div className="right menu">
        <Link to="/" className="item">
          Browse Channels
        </Link>
        <GoogleAuth />
      </div>
    </div>
  );
};

export default Header;
