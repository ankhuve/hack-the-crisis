import React from 'react';
import GoogleMap from '../../components/GoogleMap/GoogleMap';
import './locationInput.scss'

const LocationInput = () => {
    return (
        <div className="location-input">
            <GoogleMap />
        </div>
    )
}

export default LocationInput;