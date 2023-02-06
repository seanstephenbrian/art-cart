import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Title from './Title';

import CartIcon from '../img/cart.svg';

export default function NavBar(props) {

    // props:
    const { handleCartClick, itemCount } = props;

    // render:
    return (
        <div className='nav-bar'>
            <Title />
            <div className='nav-link shop-link'>
                <span className='link-text shop-link-text'><Link to='/shop'>Shop Art</Link></span>
            </div>
            <div className='nav-link cart-link' onClick={handleCartClick}>
                <div className='link-text cart-link-text'>
                    <img className='cart-icon svg-filter' src={CartIcon} alt='Your Cart' />
                    <div>{itemCount}</div>
                </div>
            </div>
        </div>
    )
}