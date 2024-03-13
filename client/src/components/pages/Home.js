import React, { useState } from "react";
import { GoogleOAuthProvider, GoogleLogin, googleLogout } from "@react-oauth/google";
import { Link } from "react-router-dom";

import "../../utilities.css";
import "./Home.css";
import Address from "../modules/Address"


const GOOGLE_CLIENT_ID = "402607011221-q6aaeqns6r1fk63b39cuv8ceb7n4jnsm.apps.googleusercontent.com";



const Skeleton = ({ userId, handleLogin, handleLogout, history }) => {
  const [address, setAddress] = useState(""); // State to store the search text

  const handleAddressChange = (newAddress) => {
    setAddress(newAddress);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can use the searchText state for further processing, such as making API requests or navigating to a new page
    console.log("address:", address);
  };

  return (
    <>
      <div className="Review-wrapper">
        <div className="Submit-container">
          <img src="bathroom.jpeg" id="bathroom-image" height="700" width="2000"></img>
          <h1 className="Name">Bathroom Buddy</h1>
          <div>
            <div className="button-container">
              <Link to="/review" id="review">
                Write a Review
              </Link>
            </div>
          </div>
          <div className="u-flex u-inlineBlock text-overlay">
            <div className="submission-input u-flex u-inlineBlock">
              <Address onAddressChange={handleAddressChange} home={true} className="background-test" />
              <Link to={`/explore/${address}`} id="explore" className="u-link background-test" onClick={handleAddressChange}>Search</Link>
              </div>
          </div>
          
        </div>
      </div>
      <h2 className="About">About us</h2>
      <h3 className="Paragraph">
        We understand the struggle of finding a clean, accessible, and private bathroom when you are
        out and about. Our mission is simple: to make your bathroom-hunting experience easy,
        convenient, and stress-free. Now with Bathroom Buddy, you can locate nearby bathrooms with a
        few clicks. No matter where you are, B.B. has got your back. We've curated a database of
        bathrooms based on accessibility, cleanliness, and privacy, ensuring you find the perfect
        spot wherever you are. Next time nature calls, let Bathroom Buddy guide you. We're here to
        make your bathroom breaks a breeze!
      </h3>
    </>
  );
};

export default Skeleton;
