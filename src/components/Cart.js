import React, { useEffect, useState } from 'react';

export default function Cart(props) {

    // props:
    const { hidden } = props;

    // state:
    const [cartItems, setCartItems] = useState([
            {
                id: 1,
                title: 'test title',
                artist: 'test artist',
                price: 100000000
            },
            {
                id: 30,
                title: 'test title 2',
                artist: 'test artist 2',
                price: 50000000
            }
    ]);

    const [cartTotal, setCartTotal] = useState(0);

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
        // and save cart to local storage:
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    // render conditions:
    if (hidden) {
        return;
    } else if (!hidden) {
        return (
            <div className='cart'>
                <div className='cart-title'>
                    Your ArtCart:
                </div>
                <div className='cart-items'>
                    {cartItems.map((item) => {
                        return (
                            <div className='cart-item' key={item.id}>
                                <div className='cart-item-details'>
                                    {item.title}, {item.artist}, ${item.price}
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className='cart-total'>
                    Total: ${cartTotal}
                </div>
                
            </div>
        )
    }
}