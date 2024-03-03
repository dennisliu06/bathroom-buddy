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
              <p className="bathroom"></p>
              <div>
                <img src="public.jpeg" id="bathroom-image" height="500" width="1000"></img>
              </div>
                <h1>Bathroom Buddy</h1>
                <div>
                <form action="/explore" method="GET">
                  <label htmlFor="name">Enter your city, address, neighborhood, zip code</label>
                    <input type="text" id="name" name="name"/>
                    <input type="submit" value="Submit"/>
                </form>
                
              
                
                </div>
                <div>
                  <div className="button-container">
                    <div id="review" onclick="writeReview()">Write a review</div>
                    <h3>We understand the struggle of finding a clean, accessible, and private bathroom when you are out and about. Our mission is simple: to make your bathroom-hunting experience easy, convenient, and stress-free. Now with Bathroom Buddy, you can locate nearby bathrooms with a few clicks. No matter where you are, B.B. has got your back. We've curated a database of bathrooms based on accessibility, cleanliness, and privacy, ensuring you find the perfect spot wherever you are. Next time nature calls, let Bathroom Buddy guide you. We're here to make your bathroom breaks a breeze!</h3>

                    <div id="learn" onclick="learnMore()">Learn More</div>



                  </div>
                  

                <button>
            
                </button>
                </div>
            </body>
        
      </>
  );
};

export default Skeleton;
