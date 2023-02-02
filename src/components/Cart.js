import React from 'react';

export default function Cart(props) {

    // props:
    const { hidden } = props;

    // render conditions:
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