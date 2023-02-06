import React, { useEffect, useState } from 'react';

import CloseIcon from '../img/close.svg';

export default function Cart(props) {

    // props:
    const { 
        handleCloseClick,
        hidden } = props;

    // state:
    const [cartItems, setCartItems] = useState([
            {
                id: 1,
                title: 'test title',
                artist: 'test artist',
                year: 'test year',
                price: 100000000,
            },
            {
                id: 30,
                title: 'test title 2',
                artist: 'test artist 2',
                year: 'test year 2',
                price: 50000000,
            }
    ]);

    const [cartTotal, setCartTotal] = useState(0);

    const [cartShipping, setCartShipping] = useState(0);

    const [cartTax, setCartTax] = useState(0);

    // HOOKS:
    // on initial render, check for existing cart in localStorage:
    useEffect(() => {
        if (localStorage.getItem('cartItems')) {
            setCartItems(JSON.parse(localStorage.getItem('cartItems')));
        }
    }, []);

    // whenever cartItems changes...
    useEffect(() => {
        // update cartTotal:
        const total = cartItems.reduce((accumulator, currentItem) => accumulator + currentItem.price, 0);
        setCartTotal(total);
        // update shipping:
        if (total >= 100000000) {
            setCartShipping(0);
        } else {
            setCartShipping(50000);
        }
        // update tax:
        setCartTax(total * 0.08875);
        // and save cart to local storage:
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    // render conditions:
    if (hidden) {
        return;
    } else if (!hidden) {
        return (
            <div className='cart'>
                <div className='cart-heading'>
                    <div className='cart-title'>
                        Your ArtCart
                    </div>
                    <div className='item-count'>
                        {cartItems.length}
                    </div>
                    <div className='close-cart' onClick={handleCloseClick}>
                        <img className='close-icon svg-filter' src={CloseIcon} alt='Close Cart' />
                    </div>
                </div>
                <div className='shipping-notice'>
                    Free shipping on orders over $100,000,000!
                </div>
                <div className='cart-items'>
                    {cartItems.map((item) => {
                        return (
                            <div className='cart-item' key={item.id}>
                                <div className='cart-item-heading'>
                                    {item.title}
                                </div>
                                <div className='cart-item-details'>
                                    {item.artist}, {item.year}
                                </div>
                                <div className='cart-item-price'>
                                    ${item.price.toLocaleString('en-US')}
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className='cart-total'>
                    <div className='label subtotal-label'>
                        Subtotal:
                    </div>
                    <div className='amount subtotal-amount'>
                        ${cartTotal.toLocaleString('en-US')}
                    </div>
                    <div className='label tax-label'>
                        Tax:
                    </div>
                    <div className='amount tax-amount'>
                        ${cartTax.toLocaleString('en-US')}
                    </div>
                    <div className='label shipping-label'>
                        Shipping:
                    </div>
                    <div className='amount shipping-amount'>
                        ${cartShipping.toLocaleString('en-US')}
                    </div>
                    <div className='label final-total-label'>
                        Total:
                    </div>
                    <div className='amount final-total-amount'>
                        ${(cartTotal + cartTax + cartShipping).toLocaleString('en-US')}
                    </div>
                </div>
                <div className='checkout'>
                    <div className='checkout-button' onClick={handleCloseClick} >Check Out</div>
                </div>
            </div>
        )
    }
}