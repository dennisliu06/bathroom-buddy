import React from "react";
import "../../utilities.css";
import "./Review.css";
import NavBar from "../modules/NavBar"

const Review = (props) => {
    return (
        <>
        <NavBar />
        <div className="Review-container">
            <div className="wrapper">
                <h3>Write your review below</h3>
                <div className="checkbox">
                    
                    <input type ="checkbox" id="agree"></input>
                
                    <input type ="checkbox" id="agree"></input>
                    
                    <input type ="checkbox" id="agree"></input>
                
                    <input type ="checkbox" id="agree"></input>
                
                    <input type ="checkbox" id="agree"></input>
                
                
                <textarea className="Review-input" name="opinion" cols="30" rows="5" placeholder="Your opinion..."></textarea>
                
                </div>
                <div className="btn-group">
                    <button type="submit" className="btn submit">Submit</button>
                    <button className="btn cancel">Cancel</button>
                    
                </div>
            </div>
            </div>
        </>
    );
};



export default Review;
