import React, { useEffect, useState } from 'react';
import uniqid from 'uniqid';

import ItemCard from './ItemCard';

import '../styles/shop.scss';

export default function Shop() {
    
    // state
    const [items, setItems] = useState([]);

    // on initial render:
    useEffect(() => {
        getItems();
    }, []);

    // methods:
    async function getItems() {
        fetch('art-data.json',
            {
                headers: { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
            .then((data) => data.json())
            .then((currentItems) => {
                setItems(currentItems);
            });
    }

    return (
        <div className='shop-page'>
            {items.map((item, index) => {
                return (
                    <ItemCard
                        itemDetails={item}
                        itemId={index}
                        key={uniqid()} 
                    />
                )
            })}
        </div>
    )
}