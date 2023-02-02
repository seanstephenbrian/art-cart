import React from 'react';

import NavLink from './NavLink';
import Title from './Title';

import '../styles/nav-bar.scss';

export default function NavBar(props) {

    // props:
    const { handleCartClick } = props;

    // render:
    return (
        <div className='nav-bar'>
            <Title />
            <NavLink linkPath='shop' navText='Shop'/>
            <div className='nav-link cart-link' onClick={handleCartClick}>
                <span className='link-text cart-link-text'>Cart</span>
            </div>
        </div>
    )
}