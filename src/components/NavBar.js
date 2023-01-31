import React from 'react';

import NavItem from './NavItem';

import '../styles/nav-bar.scss';

export default function NavBar(props) {
    // props:
    const { handleCartClick } = props;

    // render:
    return (
        <div className='nav-bar'>
            <NavItem className='nav-item' linkPath='' navText='Home'/>
            <NavItem className='nav-item' linkPath='shop' navText='Shop'/>
            <div className='nav-item cart-link' onClick={handleCartClick}>
                Cart
            </div>
        </div>
    )
}