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
                <div className="rate">

                    <input type ="radio" id="star5" name="rate" value="5"></input>
                        <label for="star5" title="text"></label>
                    <input type ="radio" id="star4" name="rate" value="4"></input>
                        <label for="star4" title="text"></label>
                    <input type ="radio" id="star3" name="rate" value="3"></input>
                        <label for="star3" title="text"></label>
                    <input type ="radio" id="star2" name="rate" value="2"></input>
                        <label for="star2" title="text"></label>
                    <input type ="radio" id="star1" name="rate" value="1"></input>
                        <label for="star1" title="text"></label>
                </div>
                <div>
                    <textarea className="Review-input" name="opinion" placeholder="Your opinion..."></textarea>
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
