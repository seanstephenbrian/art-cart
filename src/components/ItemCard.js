import React from 'react';

import { Link } from 'react-router-dom';

export default function ItemCard(props) {

    // props:
    const { itemId, itemDetails } = props;

    // render:
    return (
        <div>
            <Link to={`./${itemId}`}>Item {itemId}: </Link>
            {itemDetails.title}, {itemDetails.artist}, {itemDetails.year} - ${itemDetails.price} million
        </div>
    )
}