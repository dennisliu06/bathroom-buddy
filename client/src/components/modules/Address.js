import React, { useState, useRef, useEffect } from "react";
import "./Address.css";
import "../../utilities.css";
import { post } from "../../utilities"

const Address = (props) => {
    const [address, setAddress] = useState("");
    const [predictions, setPredictions] = useState([]);
    const autocompleteRef = useRef(null);

    const handleAddressChange = (event) => {
        setAddress(event.target.value);
    };

    

    useEffect(() => {
        const loadGoogleMapsScript = () => {
            const script = document.createElement("script");
            script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCJPdR_z8r1nFaV9BgQX18PV8BZDqib0ho&libraries=places`;
            script.async = true;
            script.onload = () => {
                const autocomplete = new window.google.maps.places.Autocomplete(autocompleteRef.current);
                autocomplete.addListener("place_changed", handlePlaceSelect);
                autocompleteRef.current = autocomplete;
            };
            document.body.appendChild(script);
        };

        if (!window.google || !window.google.maps) {
            loadGoogleMapsScript();
        } else {
            const autocomplete = new window.google.maps.places.Autocomplete(autocompleteRef.current);
            autocomplete.addListener("place_changed", handlePlaceSelect);
            autocompleteRef.current = autocomplete;
        }
    }, []);

    const handlePlaceSelect = () => {
        if (autocompleteRef.current) {
            const place = autocompleteRef.current.getPlace();
            if (place && place.geometry) {
                const address = place.formatted_address;
                setAddress(address);
            } else {
                console.error("Place details are not available.");
            }
        } else {
            console.error("Autocomplete instance is not available.");
        }
    };

    const addLocation = (lat, long) => {
        const body = {
          lat : lat,
          lng : long
        };
        post("/api/location", body).then(() => {
          console.log("added");
        })
      }

    const handleAddressLookup = () => {
        // Get current geolocation coordinates
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                // Use geolocation coordinates to reverse geocode and get address
                const geocoder = new window.google.maps.Geocoder();
                const latLng = new window.google.maps.LatLng(latitude, longitude);
                geocoder.geocode({ location: latLng }, (results, status) => {
                    if (status === "OK") {
                        if (results[0]) {
                            const address = results[0].formatted_address;
                            setAddress(address);
                        } else {
                            console.error("No address");
                        }
                    } else {
                        console.error("Geocoder failed due to: ", status);
                    }
                });
            },
            (error) => {
                console.error("Error getting geolocation coordinates: ", error);
            }
        );
    };

    const handleInputFocus = () => {
        if (address.trim() !== "") {
            const autocompleteService = new window.google.maps.places.AutocompleteService();
            autocompleteService.getPlacePredictions({ input: address }, (predictions, status) => {
                if (status === window.google.maps.places.PlacesServiceStatus.OK) {
                    setPredictions(predictions);
                }
            });
        }
    };

    const handlePredictionSelect = (prediction) => {
        setAddress(""); 
        setPredictions([]); 
    };

    return (
        <div className="Location">Your Address
            <div className="addressInput">
                <input
                    type="text"
                    placeholder="Enter Address Here"
                    value={address}
                    onChange={handleAddressChange}
                    onFocus={handleInputFocus}
                    ref={autocompleteRef}
                />
                <button onClick={handleAddressLookup}>Use Your Location</button>
            </div>
            {predictions.length > 0 && (
                <div className="predictions">
                    {predictions.map((prediction) => (
                        <div
                            key={prediction.place_id}
                            className="prediction"
                            onClick={() => handlePredictionSelect(prediction)}
                        >
                            {prediction.description}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Address;
