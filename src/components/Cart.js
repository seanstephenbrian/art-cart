import React, { useEffect, useState } from 'react';
import uniqid from 'uniqid';

import CloseIcon from '../img/close.svg';

export default function Cart(props) {

    // props:
    const {
        cartItems,
        handleCloseClick,
        hidden } = props;

    // state:
    const [cartTotal, setCartTotal] = useState(0);

    const [cartShipping, setCartShipping] = useState(0);

    const [cartTax, setCartTax] = useState(0);

    // HOOKS:
    // whenever cartItems changes...
    useEffect(() => {
        // update cartTotal:
        const total = cartItems.reduce((accumulator, currentItem) => accumulator + (currentItem.price * 1000000), 0);
        setCartTotal(total);
        // update shipping:
        if (total >= 100000000 || cartItems.length === 0) {
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
                            <div className='cart-item' key={uniqid()}>
                                <div className='cart-item-heading'>
                                    {item.title} {item.id}
                                </div>
                                <div className='cart-item-details'>
                                    {item.artist}, {item.year}
                                </div>
                                <div className='cart-item-price'>
                                    ${(item.price * 1000000).toLocaleString('en-US')}
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