import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import '../styles/item-page.scss';

export default function ItemPage() {
    
    // props:
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

    return (
        <div className='item-page'>
            <div className='return-to-shop button'>
                Return to Shop
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
            </div>
            <div className='add-to-cart button'>
                Add to Cart
            </div>
        </div>
    )
}