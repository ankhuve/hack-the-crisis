import React, { useEffect, useState } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const mapStyles = {
    width: "100%",
    height: "100%",
};

const GoogleMap = ({ google, height, width, location }) => {
    const getMapOptions = (maps) => {
        return {
            disableDefaultUI: true,
            mapTypeControl: true,
            streetViewControl: true,
            styles: [{ featureType: "poi", elementType: "labels", stylers: [{ visibility: "on" }] }],
        };
    };
    const [currentLocation, setCurrentLocation] = useState(false);
    const [markerLocation, setMarkerLocation] = useState(false);
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((location) => {
                console.log(location);
                setCurrentLocation({ lat: location.coords.latitude, lng: location.coords.longitude });
                setMarkerLocation({ lat: location.coords.latitude, lng: location.coords.longitude });
            });
        }
    }, []);

    useEffect(() => {
        if (location) {
            setCurrentLocation(location);
            setMarkerLocation(location)
        }
    }, [location]);

    const handleMapClick = (mapProps, map, clickEvent) => {
        // console.log(mapProps);
        // console.log(map);
        const lat = clickEvent.latLng.lat();
        const lng = clickEvent.latLng.lng();
        setMarkerLocation({ lat, lng });
    };

    return (
        <div>
            {currentLocation && (
                <Map
                    options={getMapOptions}
                    google={google}
                    style={{
                        ...mapStyles,
                        height: height ? height : mapStyles.height,
                        width: width ? width : mapStyles.width,
                    }}
                    initialCenter={currentLocation}
                    center={currentLocation}
                    disableDefaultUI
                    onClick={handleMapClick}
                >
                    {/* {markerLocation && <Marker position={{ lat: markerLocation.lat, lng: markerLocation.lng }} />} */}
                    <Marker name={'Current location'} position={{ lat: currentLocation.lat, lng: currentLocation.lng }} />
                </Map>
            )}
        </div>
    );
};

export default GoogleApiWrapper({
    apiKey: "AIzaSyBxCMjPDnG_3eFruZmjdoXVY9NaTHEakFY",
})(GoogleMap);
