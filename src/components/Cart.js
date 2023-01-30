import React, { useState } from 'react';

export default function Cart() {

    // state:
    const [hidden, setHidden] = useState(true);

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