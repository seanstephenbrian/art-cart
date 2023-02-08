import React from 'react';

export default function SearchBar(props) {
    // props:
    const { 
        inputValue,
        updateInputValue 
    } = props;

    return (
        <div className='search-bar-section'>
            <input
                onChange={(e) => updateInputValue(e.target.value)} 
                type='text' 
                value={inputValue}
            >
            </input>
        </div>
    )
}