import React from 'react';

import NavItem from './NavItem';

import '../styles/nav-bar.scss';

export default function NavBar(props) {
    // props:
    const { handleCartClick } = props;

    // render:
    return (
        <div className='nav-bar'>
            <NavItem linkPath='' navText='Home'/>
            <NavItem linkPath='shop' navText='Shop'/>
            <div className='cart-link' onClick={handleCartClick}>
                Cart
            </div>
        </div>
    )
}