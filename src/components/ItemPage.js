import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function ItemPage(props) {
    // state:
    const [itemDetails, setItemDetails] = useState({})

    // props:
    const { itemId } = useParams();

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
            .then((currentInventory) => {
                setItemDetails(currentInventory[itemId]);
            });
    }

    return (
        <div>
            {itemDetails.title}, {itemDetails.artist}, {itemDetails.year}, ${itemDetails.price}
        </div>
    )
}