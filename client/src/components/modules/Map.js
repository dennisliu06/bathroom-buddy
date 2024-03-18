import React from "react";
import GoogleMapReact from 'google-map-react';
import Marker from "./Marker"


export default function SimpleMap(props){
    const location = props.location;
  

  return (
    <>
        <div className="Map-container">
            <div style={{height: '95vh', width: '50%'}}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyCJPdR_z8r1nFaV9BgQX18PV8BZDqib0ho" }}
                center={location}
                defaultZoom={17}
                
            >
            
                <Marker
                lat={location.lat}
                lng={location.lng}
                text="You"
                />
            
            </GoogleMapReact>
            </div>
        </div>
    </>
  );
}