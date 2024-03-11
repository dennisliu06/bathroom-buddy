import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


import "../../utilities.css";
import "./Explore.css"
import NavBar from "../modules/NavBar.js";
import Map from "../modules/Map.js";

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};


  const Explore = (props) => {
    const { address } = useParams();
    const [location, setLocation] = useState({
      lat: 42.36042881656016,
      lng: -71.0873451394108
    });

    useEffect(() => {
      // Make a request to the Geocoding API
      fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyCJPdR_z8r1nFaV9BgQX18PV8BZDqib0ho`)
          .then(response => response.json())
          .then(data => {
              // Process the API response
              const { results } = data;
              if (results.length > 0) {
                  const { geometry } = results[0];
                  const { location } = geometry;
                  console.log("Latitude:", location.lat);
                  console.log("Longitude:", location.lng);
                  // You can now use the latitude and longitude to display the location on a map
                  setLocation(location);
              }
          }).catch(error => {
              console.error("Error fetching geocoding data:", error);
          });
  }, []);

    return (
      <>
        <NavBar/>
        <div className="Map-container">
          <Map location={location}/>
          <h1>Address: {address}</h1>
        </div>
        
      </>
    )
  }
  
  export default Explore;