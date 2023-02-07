import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import '../styles/item-page.scss';

export default function ItemPage(props) {
    
    // props/params:
    const { addToCart, cartItems, removeFromCart } = props;
    const { itemId } = useParams();

    // state:
    const [itemDetails, setItemDetails] = useState({})

    // on initial render:
    useEffect(() => {
        getItemDetails();
        window.scrollTo(0, 0);
    }, []);

    // methods:
    async function getItemDetails() {
        fetch('../art-data.json',
            {
                headers: { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
            .then((data) => data.json())
            .then((currentItems) => {
                setItemDetails(currentItems[itemId]);
            });
    }

    // image render conditions:
    let previewImage;
    if (itemDetails.src) {
        previewImage = <img src={require(`../img/art/${itemDetails.src}`)} alt={itemDetails.title}></img>;
    } else {
        previewImage = '';
    }

    // add button render conditions:
    let addButton;
    // render 'Added' button if the item is already in the cart:
    if (cartItems.some(cartItem => cartItem.title === itemDetails.title)) {
        addButton =
            <div 
                className='added-to-cart item-page-button'
                onClick={() => removeFromCart(itemDetails)}
            >
                Remove from Cart
            </div>;
    // otherwise render 'Add to Cart' button:
    } else {
        addButton = 
            <div 
                className='add-to-cart item-page-button' 
                onClick={() => addToCart(itemDetails)} 
            >
                Add to Cart
            </div>;
    }

    return (
        <div className='item-page'>
            <div className='return-to-shop item-page-button'>
                <Link to='/shop'>Return to Shop</Link>
            </div>
            <div className='item-details'>
                <div className='item-title'>
                    {itemDetails.title}
                </div>
                <div className='preview-image'>
                    {previewImage}
                </div>
                <div className='item-artist'>
                    {itemDetails.artist}
                </div>
                <div className='item-year'>
                    {itemDetails.year}
                </div>
                <div className='item-price'>
                    ${itemDetails.price} million
                </div>
                {addButton}
            </div>
        </div>
    )
}