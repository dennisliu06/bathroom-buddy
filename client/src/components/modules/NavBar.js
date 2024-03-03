import React from "react";
import { Link } from "react-router-dom";

import "../../utilities.css";
import "./NavBar.css";

const NavBar = (props) => {
  return (
    <>
      <div className="NavBar-container">
        <div className="NavBar-title u-inlineBlock u-bold">Bathroom Buddy</div>
        <div className="u-inlineBlock">
          <img src="/maleLogo.png" className="NavBar-logo" width="9.2px" alt="logo"></img>
          <img src="/femaleLogo.png" className="NavBar-logo" width="15px" alt="logo"></img>
        </div>
        <div className="NavBar-linkContainer u-inlineBlock">
          <Link to="/" className="NavBar-link">
            Home
          </Link>
          <Link to="/review" className="NavBar-link">
            Write a Review
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;
