import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap(props){
  const defaultProps = {
    center: {
      lat: 42.36042881656016,
      lng: -71.0873451394108
    },
    zoom: 17
  };

  return (
    // Important! Always set the container height explicitly
    <>
        <div className="Map-container">
            <div style={{height: '95vh', width: '50%'}}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyCJPdR_z8r1nFaV9BgQX18PV8BZDqib0ho" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <AnyReactComponent
                lat={42.36042881656016}
                lng={-71.0873451394108}
                text="My Marker"
                />
            </GoogleMapReact>
            </div>
        </div>
    </>
  );
}