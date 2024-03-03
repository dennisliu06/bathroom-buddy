import React from "react";
import { Link } from "react-router-dom";

import "../../utilities.css";
import "./NavBar.css";

const NavBar = (props) => {
  return (
    <>
      <div className="NavBar-container">
        <div className="NavBar-title u-inlineBlock u-bold">Bathroom Buddy</div>
        <div className="NavBar-linkContainer u-lineBlock">
            <Link to="/" className="u-link">
                Home
            </Link>
            Hello
        </div>
      </div>
    </>
  );
};

export default NavBar;
