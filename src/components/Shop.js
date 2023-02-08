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
    const [searchTerm, setSearchTerm] = useState('');

    // hooks:
    useEffect(() => {
        getItems();
    }, []);

    useEffect(() => {
        const searchResults = items.filter((item) => {
            if (
                item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
                String(item.year).includes(searchTerm)) {
                return item;
            } else {
                return null;
            }
        });
        setFilteredItems(searchResults);
    }, [items, searchTerm]);

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
                setFilteredItems(currentItems);
            });
    }
 
    return (
        <div className='shop-page'>
            <SearchBar 
                inputValue={searchTerm} 
                updateInputValue={setSearchTerm}
            />
            <div className='item-cards'>
                {filteredItems.map((item, index) => {
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