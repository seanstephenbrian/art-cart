import React from 'react';

import '../styles/home-page.scss';

export default function Home() {
    return (
        <div className='home-page'>
            <div className='welcome-message'>
                Welcome to ArtCart.
            </div>
            <div className='mission-statement'>
                At ArtCart, we passionately believe that the world's most expensive art
                should be accessible to anyone with an Internet connection.
            </div>
            <div className='home-text'>
                We invite you to peruse our collection of the 115 most expensive works in
                the history of art.
            </div>
            <div className='home-text'>
                From awe-inspiring Renaissance masterworks to Abstract Expressionist canvasses of towering importance,
                ArtCart's catalog spans a world-class range of styles, time periods, and subjects.
            </div>
            <div className='home-text'>
                If you find a piece that speaks to you, owning it is as simple as adding it to your ArtCart
                and checking out. We are pleased to offer free shipping within the continental U.S. on any orders
                over $200,000,000!
            </div>
            <div className='home-text'>
                We thank you for your patronage. Click below to start shopping!
            </div>
            <div className='home-button'>
                Shop Now
            </div>
        </div>
    )
}