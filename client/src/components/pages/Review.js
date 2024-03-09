import React from "react";
import "../../utilities.css";
import "./Review.css";
import NavBar from "../modules/NavBar"
import Stars from "../modules/Stars"
import Address from "../modules/Address"
import BathroomButtons from "../modules/BathroomButtons";

const Review = (props) => {
    const handleSubmit = () => {
        
    }
    const handleCancel = () => {
        window.location.reload(); 
    };
    return (
        <>
        <NavBar />
        <div className="Review-container">
            <div className="wrapper">
                <h1>Write Your Review Below</h1>
                <h1></h1>
                <Address />
                <h1></h1>
                <BathroomButtons />
                <div className="textInputs">
                    <div className="overall">Rate Your Overall Experience
                        <Stars groupName="overallStars" />
                        <textarea className="Review-input" name="opinion" placeholder="Any additionall overall comments?"></textarea>
                    </div>
                    <div className="cleaniness">Rate The Overall Cleaniness
                        <Stars groupName="cleanlinessStars" />
                        <textarea className="Review-input" name="opinion" placeholder="Any additionall cleaniness comments?"></textarea>
                    </div>
                    <div className="accessibility">Rate The Overall Accessibility
                        <Stars groupName="accessibilityStars" />
                        <textarea className="Review-input" name="opinion" placeholder="Any additionall accessibility comments?"></textarea>
                    </div>
                    
                </div>
                <div className="btn-group">
                    <button type="submit" className="btn submit" onClick={handleSubmit}>Submit</button>
                    <button className="btn cancel" onClick={handleCancel}>Cancel</button>
                    
                </div>
            </div>
            </div>
        </>
    );
};



export default Review;
