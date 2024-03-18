import React from "react";
import markerImage from "../../../dist/marker.png";
import "./Marker.css"


const Marker = ({ text }) => {
    return(
        <>
        <div style={{ position: 'absolute', transform: 'translate(-50%, -50%)', top: '50%', left: '50%' }}>
            <img src={markerImage} alt="marker" style={{ width: '100%', height: '100%' }}/>{text}
        </div>
        </>
    )
}

export default Marker;