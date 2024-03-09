import React from "react";
import markerImage from "../../../dist/marker.png";
import "./Marker.css"


const Marker = ({ text }) => {
    return(
        <>
        <div><img src={markerImage} width="20px"/>{text}</div>
        </>
    )
}

export default Marker;