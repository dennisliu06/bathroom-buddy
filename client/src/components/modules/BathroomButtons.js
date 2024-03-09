import React, { useState } from "react";
import "./BathroomButtons.css";
import "../../utilities.css";

const BathroomButtons = (props) => {
    const [selectedType, setSelectedType] = useState("");
    const [showCheckboxes, setShowCheckboxes] = useState(false);
    const [femaleCheckboxes, setFemaleCheckboxes] = useState(false);

    const handleButtonClick = (type) => {
        setSelectedType(type);
        setShowCheckboxes(true);
        setFemaleCheckboxes(type === "Female" || type === "All-Gender");
    };

    return (
        <div className="bathroomType">What type of bathroom did you use?
            <div className="buttons">
                <button type="button" className="male" onClick={() => handleButtonClick("Male")}>Male</button>
                <button type="button" className="female" onClick={() => handleButtonClick("Female")}>Female</button>
                <button type="button" className="allgender" onClick={() => handleButtonClick("All-Gender")}>All-Gender</button>
                <button type="button" className="family" onClick={() => handleButtonClick("Family")}>Family</button>
            </div>
            {showCheckboxes && (
                <div>
                    <label><input type="checkbox" value="A" /> Handicap Accessibility? </label>
                    <label><input type="checkbox" value="B" /> Baby Changing Stations? </label>
                    <label><input type="checkbox" value="C" /> Single Stall? </label>
                </div>
            )}
            {(selectedType === "Female" || selectedType === "All-Gender") && femaleCheckboxes && (
                <label><input type="checkbox" value="D" /> Feminine Products?</label>
            )}
        </div>  
    );
};

export default BathroomButtons;
