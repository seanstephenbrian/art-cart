import React from 'react';
import { Link } from 'react-router-dom';

import Title from './Title';

import CartIcon from '../img/cart.svg';

export default function NavBar(props) {

    // props:
    const { handleCartClick } = props;

    // render:
    return (
        <div className='nav-bar'>
            <Title />
            <div className='nav-link shop-link' onClick={handleCartClick}>
                <span className='link-text shop-link-text'><Link to='/shop'>Shop</Link></span>
            </div>
            <div className='nav-link cart-link' onClick={handleCartClick}>
                <span className='link-text cart-link-text'>Cart</span>
                <img className='cart-icon' src={CartIcon} alt='Your Cart' />
            </div>
        </div>
    )
}