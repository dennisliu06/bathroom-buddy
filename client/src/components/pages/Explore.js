import React from "react";


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

/*const Explore = (props) => {
    const { isLoaded } = useJsApiLoader({
      id: 'Maps-API-Key',
      googleMapsApiKey: "AIzaSyCJPdR_z8r1nFaV9BgQX18PV8BZDqib0ho"
    })
    
  
    const [map, setMap] = React.useState(null)
  
    const onLoad = React.useCallback(function callback(map) {
      // This is just an example of getting and using the map instance!!! don't just blindly copy!
      const bounds = new window.google.maps.LatLngBounds(center);
      map.fitBounds(bounds);
        
      setMap(map)
    }, [])

    useEffect(() => {
      
    }, [])
  
    const onUnmount = React.useCallback(function callback(map) {
      setMap(null)
    }, [])
  
    return isLoaded ? (
      <>
        <NavBar />
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          {}
          <></>
        </GoogleMap>
      </>
    ) : <></>
  }; */

  const Explore = (props) => {

    return (
      <>
        <NavBar/>
        <div className="Map-container">
          <Map />
        </div>
        
      </>
    )
  }
  
  export default Explore;