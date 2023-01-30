import React, { useEffect } from 'react';
import uniqid from 'uniqid';

import ItemCard from './ItemCard';

export default function Shop(props) {
    // props:
    const { items } = props;

    return (
        <div className='shop-page'>
            {items.map((item, index) => {
                return (
                    <ItemCard key={uniqid()} itemId={index} itemDetails={item} />
                )
            })}
        </div>
    )
}