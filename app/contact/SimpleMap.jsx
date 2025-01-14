"use client"

import React, { useRef } from "react";
import { MapContainer, TileLayer,Marker ,Popup} from "react-leaflet";
import "leaflet/dist/leaflet.css";
const SimpleMap = () => {
    const position= [33.80813, 10.99228,]

    const mapRef = useRef(null);
    const latitude = 33.773391;
    const longitude = 10.885904;
  
    return ( 
      // Make sure you set the height and width of the map container otherwise the map won't show
        <MapContainer center={[latitude, longitude]} zoom={10} ref={mapRef} style={{height: "100%", width: "100%"}}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
           <Marker position={position}>
        <Popup>
          Our Location ! <br />
        </Popup>
      </Marker>
        </MapContainer>
    );
  };
  
  export default SimpleMap;