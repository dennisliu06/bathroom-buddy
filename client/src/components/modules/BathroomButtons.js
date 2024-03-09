import React, { useState } from "react";
import "./BathroomButtons.css";
import "../../utilities.css";
import Address from "./Address";

const BathroomButtons = (props) => {
    const [selectedType, setSelectedType] = useState("");
    const handleButtonClick = (type) => {
        setSelectedType(type);
        if(type == "Male"){
        }
    };
    return (
        <div className="bathroomType">What type of bathroom did you use?
            <button type="button" className="male" onClick={() => handleButtonClick("Male")}>Male</button>
            <button type="button" className="female" onClick={() => handleButtonClick("Female")}>Female</button>
            <button type="button" className="allgender" onClick={() => handleButtonClick("All-Gender")}>All-Gender</button>
            <button type="button" className="family" onClick={() => handleButtonClick("Family")}>Family</button>
        </div>   
    )
}

export default BathroomButtons;