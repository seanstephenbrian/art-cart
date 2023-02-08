import React from 'react';

import SearchIcon from '../img/search.svg';

export default function SearchBar(props) {
    // props:
    const { 
        inputValue,
        updateInputValue 
    } = props;

    return (
        <div className='search-bar-section'>
            <div className='search-icon'>
                <img alt='Search' src={SearchIcon}></img>
            </div>
            <input
                onChange={(e) => updateInputValue(e.target.value)} 
                placeholder='Search by title, artist, or year.'
                role='searchbox'
                type='text' 
                value={inputValue}
            >
            </input>
        </div>
    )
}