import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function ItemPage() {

    const { itemId } = useParams();

    return (
        <div>
            {itemId}
        </div>
    )
}