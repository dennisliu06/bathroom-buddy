import React from "react";
import "./Stars.css";

const Stars = (props) => {
    const { groupName } = props;
    return (
        <div className="rate">
            <input type="radio" id={`${groupName}-star5`} name={groupName} value="5"></input>
            <label htmlFor={`${groupName}-star5`} title="text"></label>
            <input type="radio" id={`${groupName}-star4`} name={groupName} value="4"></input>
            <label htmlFor={`${groupName}-star4`} title="text"></label>
            <input type="radio" id={`${groupName}-star3`} name={groupName} value="3"></input>
            <label htmlFor={`${groupName}-star3`} title="text"></label>
            <input type="radio" id={`${groupName}-star2`} name={groupName} value="2"></input>
            <label htmlFor={`${groupName}-star2`} title="text"></label>
            <input type="radio" id={`${groupName}-star1`} name={groupName} value="1"></input>
            <label htmlFor={`${groupName}-star1`} title="text"></label>
        </div>
    );
};

export default Stars;
