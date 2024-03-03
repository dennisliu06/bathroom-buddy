import React from "react";
import { GoogleOAuthProvider, GoogleLogin, googleLogout } from "@react-oauth/google";

import "../../utilities.css";
import "./Skeleton.css";

//TODO: REPLACE WITH YOUR OWN CLIENT_ID
const GOOGLE_CLIENT_ID = "402607011221-q6aaeqns6r1fk63b39cuv8ceb7n4jnsm.apps.googleusercontent.com";

const Skeleton = ({ userId, handleLogin, handleLogout }) => {
  return (
    <>
    
        
            
            <body>
                <h1>Bathroom Buddy</h1>
                <p>address, city, neighborhood, zipcode</p>
                <h2>Write a review</h2>
                <div>
                    <h3>About us</h3>
                    <h4>We understand the struggle of finding a clean, accessible, and private bathroom when you are out and about. Our mission is simple: to make your bathroom-hunting experience easy, convenient, and stress-free. Now with Bathroom Buddy, you can locate nearby bathrooms with a few clicks. No matter where you are, B.B. has got your back. We've curated a database of bathrooms based on accessibility, cleanliness, and privacy, ensuring you find the perfect spot wherever you are. Next time nature calls, let Bathroom Buddy guide you. We're here to make your bathroom breaks a breeze!</h4>
                    <h5>Learn more</h5>
                </div>
            </body>
        
      </>
  );
};

export default Skeleton;
