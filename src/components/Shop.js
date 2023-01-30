import React from 'react';
import uniqid from 'uniqid';

import ItemCard from './ItemCard';

export default function Shop() {
    return (
        <div className='shop-page'>
            <ItemCard itemId={uniqid()} />
        </div>
    )
}