import React, {useEffect, useState} from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
    width: '100%',
    height: '100%',
  };

const GoogleMap = ({google}) => {
    const getMapOptions = (maps) => {
        return {
          disableDefaultUI: true,
          mapTypeControl: true,
          streetViewControl: true,
          styles: [{ featureType: 'poi', elementType: 'labels', stylers: [{ visibility: 'on' }] }],
        };
      };
    const [currentLocation, setCurrentLocation] = useState(false)
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((location) => {
                console.log(location);
                setCurrentLocation({lat: location.coords.latitude, lng: location.coords.longitude})
            });
        }
    }, [])
    return(
        <div>
            {
                currentLocation && (
                    <Map options={getMapOptions} google={google} style={mapStyles} initialCenter={currentLocation} disableDefaultUI>
                        <Marker>
                        </Marker>
                    </Map>
                    )
            }
        </div>
    )
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBxCMjPDnG_3eFruZmjdoXVY9NaTHEakFY'
  })(GoogleMap);