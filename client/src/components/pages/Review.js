import React from "react";
import "../../utilities.css";
import "./Review.css";
import NavBar from "../modules/NavBar"
import Stars from "../modules/Stars"
import Address from "../modules/Address"

const Review = (props) => {
    return (
        <>
        <NavBar />
        <div className="Review-container">
            <div className="wrapper">
                <h1>Write Your Review Below</h1>
                <h1></h1>
                <Address />
                <h1></h1>
                <div className="textInputs">
                    <div className="overall">Rate Your Overall Experience
                        <Stars />
                        <textarea className="Review-input" name="opinion" placeholder="Any additionall overall comments?"></textarea>
                    </div>
                    <div className="cleaniness">Rate The Overall Cleaniness
                        <Stars />
                        <textarea className="Review-input" name="opinion" placeholder="Any additionall cleaniness comments?"></textarea>
                    </div>
                    <div className="accessibility">Rate The Overall Accessibility
                        <Stars />
                        <textarea className="Review-input" name="opinion" placeholder="Any additionall accessibility comments?"></textarea>
                    </div>
                    
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
