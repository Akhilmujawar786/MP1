import React, { useState } from 'react';
import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';
import './MapComponent.css';

const MapComponent = ({ origin, destination }) => {
  const [directions, setDirections] = useState(null);

  const containerStyle = {
    width: '60%',
    height: '400px'
  };

  const center = {
    lat: 37.7749, // Default center, you can change this to a more suitable location
    lng: -122.4194
  };

  const directionsCallback = (response) => {
    if (response !== null) {
      if (response.status === 'OK') {
        setDirections(response);
      } else {
        console.log('response: ', response);
      }
    }
  };

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyDA-YKTx3s5XkBF13Bus8oMXMQRNLBpxJs"
    ><div className='gofor2'>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={7}
      >
        {origin && destination && (
          <DirectionsService
            options={{
              destination: destination,
              origin: origin,
              travelMode: 'DRIVING'
            }}
            callback={directionsCallback}
          />
        )}
        {directions && (
          <DirectionsRenderer
            options={{
              directions: directions
            }}
          />
        )}
      </GoogleMap>
      </div>
    </LoadScript>
  );
};

export default MapComponent;