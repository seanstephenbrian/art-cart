import React from 'react';

import { Link } from 'react-router-dom';

export default function ItemCard(props) {

    // props:
    const {
        cartItems,
        handleAddClick,
        handleRemoveClick,
        itemId, 
        itemDetails } = props;

    // image render conditions:
    let previewImage;
    if (itemDetails.src) {
        previewImage = <img src={require(`../img/art/${itemDetails.src}`)} alt={itemDetails.title}></img>;
    }

    // add button render conditions:
    let addButton;
    // render 'Remove from Cart' button if the item is already in the cart:
    if (cartItems.some(cartItem => cartItem.title === itemDetails.title)) {
        addButton =
            <div 
                className='card-button remove-from-cart'
                onClick={() => handleRemoveClick(itemDetails)}
            >
                Remove from Cart
            </div>;
    // otherwise render 'Add to Cart' button:
    } else {
        addButton = 
            <div 
                className='card-button add-to-cart' 
                onClick={() => handleAddClick(itemDetails)}
            >
                Add to Cart
            </div>;
    }

    // render:
        return (
            <div className='item-card'>
                <div className='item-title'>
                    <Link to={`./${itemId}`}>{itemDetails.title}</Link>
                </div>
                <div className='item-details'>
                    {itemDetails.artist}, {itemDetails.year}
                </div>
                <div className='item-img-container'>
                    {previewImage}
                </div>
                <div className='item-price'>
                    ${itemDetails.price} million
                </div>
                <Link to={`./${itemId}`} className='card-button view-details'>
                    View Details
                </Link>
                {addButton}
            </div>
        )
}