import React from "react";

import "../../utilities.css";
import "./NewLocationInput.css";

const NewLocationInput = () => {

    const project = (latLng) => {
        let siny = Math.sin((latLng.lat() * Math.PI) / 180);
      
        // Truncating to 0.9999 effectively limits latitude to 89.189. This is
        // about a third of a tile past the edge of the world tile.
        siny = Math.min(Math.max(siny, -0.9999), 0.9999);
        return new google.maps.Point(
          TILE_SIZE * (0.5 + latLng.lng() / 360),
          TILE_SIZE * (0.5 - Math.log((1 + siny) / (1 - siny)) / (4 * Math.PI)),
        );
      }

    
}

export default NewLocationInput;