import React from 'react';

import { Link } from 'react-router-dom';

export default function ItemCard(props) {
    // props:
    const { itemId } = props;

    // render:
    return (
        <div>
            item {itemId}
            <Link to={`./${itemId}`}>item link</Link>
        </div>
    )
}