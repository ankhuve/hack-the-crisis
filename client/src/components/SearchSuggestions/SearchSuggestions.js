import React from 'react';
import './searchSuggestions.scss';

const SearchSuggestions = ({searchSuggestions, handleOnClick}) => {
    return(
        <div className='search-suggestions'>
            {searchSuggestions.map((suggestion) => {
                return(
                    <div className='search-suggestions__suggestion' onClick={() => handleOnClick(suggestion)}>
                        {suggestion.formatted_address}
                    </div>
                )
            })}
        </div>
    );
}

export default SearchSuggestions;