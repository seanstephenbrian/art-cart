import React, { useState } from 'react';

export default function Cart(props) {

    // props:
    const { hidden } = props;

    if (hidden) {
        return;
    } else if (!hidden) {
        return (
            <div>
                cart
            </div>
        )
    }
}