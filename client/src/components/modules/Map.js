import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

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
                <AnyReactComponent
                lat={42.3504997}
                lng={-71.1053991}
                text="My Marker"
                />
            </GoogleMapReact>
            </div>
        </div>
    </>
  );
}