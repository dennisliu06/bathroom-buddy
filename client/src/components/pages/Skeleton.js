import React from "react";
import { GoogleOAuthProvider, GoogleLogin, googleLogout } from "@react-oauth/google";
import { Link } from "react-router-dom";

import "../../utilities.css";
import "./Skeleton.css";

//TODO: REPLACE WITH YOUR OWN CLIENT_ID
const GOOGLE_CLIENT_ID = "402607011221-q6aaeqns6r1fk63b39cuv8ceb7n4jnsm.apps.googleusercontent.com";

const Skeleton = ({ userId, handleLogin, handleLogout }) => {
  return (
    <>
    
        
            
            <body>

          
              <p className="bathroom"></p>
              <div>
                <img src="bathroom.jpeg" id="bathroom-image" height="700" width="2000"></img>
                <div className="text-overlay">
                <form action="/explore" method="GET">
                <input type="text" id="name" name="name" placeholder="Enter your city, address, neighborhood, zip code" />
                <input type="submit" value="Search" /> 
                </form>
              </div>
              </div>

              
                <h1>Bathroom Buddy</h1>
                <div>
                
                
              
                
                </div>
                <div>
                  <div className="button-container">
                    <Link to="/review" id="review">
                      Write a Review
                    </Link>
                    <h2>About us</h2>
                    <h3>We understand the struggle of finding a clean, accessible, and private bathroom when you are out and about. Our mission is simple: to make your bathroom-hunting experience easy, convenient, and stress-free. Now with Bathroom Buddy, you can locate nearby bathrooms with a few clicks. No matter where you are, B.B. has got your back. We've curated a database of bathrooms based on accessibility, cleanliness, and privacy, ensuring you find the perfect spot wherever you are. Next time nature calls, let Bathroom Buddy guide you. We're here to make your bathroom breaks a breeze!</h3>




                  </div>
                  

                
                </div>
            </body>
        
      </>
  );
};

export default Skeleton;
