import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/home-page.scss';

export default function Home() {
    return (
        <div className='home-page'>
            <div className='hero'>
                <div className='welcome-message'>
                    Welcome to ArtCart.
                </div>
                <div className='hero-caption'>
                    <Link to='/shop/52'>A Wheatfield with Cypresses, Vincent van Gogh, 1889, oil on canvas.</Link>
                </div>
            </div>
            <div className='mission-statement'>
                We passionately believe that anyone with an Internet connection should
                be able to buy the world's most expensive art.
            </div>
            <div className='home-text'>
                On this site, you will find our collection of the 115 most expensive works in
                the history of art.
            </div>
            <div className='home-text'>
                From awe-inspiring Renaissance masterworks to Abstract Expressionist canvasses of towering importance,
                ArtCart's catalog spans a world-class range of styles, time periods, and subject matter.
            </div>
            <div className='home-text'>
                If you find a piece that speaks to you, owning it is as simple as adding it to your ArtCart. 
                We are pleased to offer free shipping within the continental U.S. on any orders over $200,000,000!
            </div>
            <div className='home-text'>
                Thank you for your patronage. Click below to start shopping!
            </div>
            <Link to='/shop' className='home-button'>
                Shop Now
            </Link>
        </div>
    )
}