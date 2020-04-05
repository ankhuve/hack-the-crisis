import React, {useState, useEffect} from 'react';
import GoogleMap from '../../components/GoogleMap/GoogleMap';
import './locationInput.scss'
import Input from '../../components/Input/Input';
import {searchForLocation} from '../../helpers/googleMaps';
import SearchSuggestions from '../../components/SearchSuggestions/SearchSuggestions';
import { Link } from 'react-router-dom';

const LocationInput = () => {
    const [locationInput, setLocationInput] = useState('');
    const [searchSuggestions, setSearchSuggestions] = useState([]);
    const [clickedLocation, setClickedLocation] = useState(false);

    useEffect(() => {
        if(locationInput.length > 5){
            searchForLocation(locationInput)
            .then((result) => {
                setSearchSuggestions(result.data.candidates);
            })
            .catch((error) => {
                setSearchSuggestions([]);
            })
            // setSearchSuggestions(searchForLocation(locationInput))
        }
        else {
            setSearchSuggestions([]);
        }
    }, [locationInput])

    useEffect(() => {
        console.log(searchSuggestions);
    }, [searchSuggestions])

    const handleLocationInput = async (e) => {
        setLocationInput(e.target.value);
    }

    const handleClickedLocation = (location) => {
        setClickedLocation(location.geometry.location);
        setLocationInput(location.formatted_address)
    }

    return (
        <div className="location-input">
            <div className="location-input__input">
                <Input label='location' name='locationInput' handleInput={handleLocationInput} value={locationInput}/>
                {
                    searchSuggestions.length > 0 &&
                    <SearchSuggestions handleOnClick={handleClickedLocation} searchSuggestions={searchSuggestions} />
                }
            </div>
            <div className="location-input__map">
                <GoogleMap height={'292px'} width={'292px'} location={clickedLocation}/>
            </div>
            <div className="location-input__buttons">
                <Link to="/create-errand">
                    <button className="button button--secondary button--big button--outline--secondary">Back</button>
                </Link>
                <Link to="/missions">
                    <button className="button button--secondary button--big">Send it!</button>
                </Link>
            </div>
        </div>
    )
}

export default LocationInput;