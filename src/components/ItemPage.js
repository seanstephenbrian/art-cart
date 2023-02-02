import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function ItemPage() {
    
    // props:
    const { itemId } = useParams();

    // state:
    const [itemDetails, setItemDetails] = useState({})

    // on initial render:
    useEffect(() => {
        getItemDetails();
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

    return (
        <div>
            {itemDetails.title}, {itemDetails.artist}, {itemDetails.year}, ${itemDetails.price} million
        </div>
    )
}