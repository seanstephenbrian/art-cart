import React from 'react';

import { Link } from 'react-router-dom';

export default function ItemCard(props) {

    // props:
    const { itemId, itemDetails } = props;

    // image render conditions:
    let previewImage;
    if (itemDetails.src) {
        previewImage = <img src={require(`../img/art/${itemDetails.src}`)} alt={itemDetails.title}></img>;
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
            <div className='view-details'>
                <Link to={`./${itemId}`}>View Details</Link>
            </div>
        </div>
    )
}