import React from "react";
import MapComponent from "./MapComponent";
import { useState } from "react";
import './GreenPath.css';


function GreenPath() {
    const [origin, setOrigin] = useState(null);
    const [destination, setDestination] = useState(null);
    const [originInput, setOriginInput] = useState('');
    const [destinationInput, setDestinationInput] = useState('');
  
    const handleOriginChange = (e) => {
      setOriginInput(e.target.value);
    };
  
    const handleDestinationChange = (e) => {
      setDestinationInput(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Geocode the addresses to get the lat and lng
      fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(originInput)}&key=AIzaSyDA-YKTx3s5XkBF13Bus8oMXMQRNLBpxJs`)
        .then(response => response.json())
        .then(data => {
          if (data.results.length > 0) {
            const location = data.results[0].geometry.location;
            setOrigin({ lat: location.lat, lng: location.lng });
          } else {
            console.error('Invalid origin address');
          }
        });
  
      fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(destinationInput)}&key=AIzaSyDA-YKTx3s5XkBF13Bus8oMXMQRNLBpxJs`)
        .then(response => response.json())
        .then(data => {
          if (data.results.length > 0) {
            const location = data.results[0].geometry.location;
            setDestination({ lat: location.lat, lng: location.lng });
          } else {
            console.error('Invalid destination address');
          }
        });
    };
  
    return (
        <div>
          <h1 style={{ textAlign: 'center' }}>Google Maps Routing</h1>
          <form onSubmit={handleSubmit}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
              <div>
                <label className="font">Origin&nbsp;: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;</label>
                <input type="text" value={originInput} onChange={handleOriginChange} />
              </div>
              <div>
                <label className="font">Destination: &nbsp;</label>
                <input type="text" value={destinationInput} onChange={handleDestinationChange} /> <br></br>
              </div>
              
              <button type="submit" className="gofor">Get Route</button>
            </div>
          </form>
          <br></br>
          <MapComponent origin={origin} destination={destination} />

          
        </div>
      );
      
  };


export default GreenPath;