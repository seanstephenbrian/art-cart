import React, { useEffect, useState } from 'react';
import uniqid from 'uniqid';

import ItemCard from './ItemCard';
import SearchBar from './SearchBar';

import '../styles/shop.scss';

export default function Shop(props) {
    
    // props:
    const { addToCart, cartItems, removeFromCart } = props;

    // state
    const [items, setItems] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const [searchTerm, setSearchTerm] = useState('test');

    // hooks:
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

    function updateSearchTerm(newInputValue) {
        setSearchTerm(newInputValue);
    }

 
    return (
        <div className='shop-page'>
            <SearchBar 
                inputValue={searchTerm} 
                updateInputValue={updateSearchTerm}
            />
            <div className='item-cards'>
                {items.map((item, index) => {
                    return (
                        <ItemCard
                            cartItems={cartItems}
                            handleAddClick={() => addToCart(item)}
                            handleRemoveClick={() => removeFromCart(item)}
                            itemDetails={item}
                            itemId={index}
                            key={uniqid()} 
                        />
                    )
                })}
            </div>
        </div>
    )
}