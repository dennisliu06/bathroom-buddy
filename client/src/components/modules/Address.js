import React, { useState } from "react";
import "./Address.css";
import "../../utilities.css";

const Address = (props) => {
    const [address, setAddress] = useState("");

    const handleAddressChange = (event) => {
        setAddress(event.target.value);
    };

    const handleAddressLookup = () => {
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
                }
            })
            .catch(error => {
                console.error("Error fetching geocoding data:", error);
            });
    };

    return (
        <div className="Location">Your Address
            <div className="addressInput">
                <input
                    type="text"
                    placeholder="Enter Address Here"
                    value={address}
                    onChange={handleAddressChange}
                />
                <button onClick={handleAddressLookup}>Use Your Location</button>
            </div>
        </div>
    );
};

export default Address;
