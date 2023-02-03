import React from 'react';

import { Link } from 'react-router-dom';

export default function Title() {
    return (
        <div className='title-section'>
            <div className='title-text'>
                <Link to=''>ArtCart</Link>
            </div>
            <div className='subtitle-text'>
                Buy the World's Most Expensive Art
            </div>
        </div>
    )
}