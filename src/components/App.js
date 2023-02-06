// dependencies:
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// components:
import Cart from './Cart';
import Footer from './Footer';
import Home from './Home';
import ItemPage from './ItemPage';
import NavBar from './NavBar';
import Shop from './Shop';

// styles:
import '../styles/main.scss';

export default function App() {
    
    // state:
    const [cartHidden, setCartHidden] = useState(true);
    const [cartItems, setCartItems] = useState([]);

    // methods:
    function updateCart(item) {
        // check for item in cart:
        if (cartItems.includes(item)) return;
        // if item's not there, add it to cart:
        setCartItems([...cartItems, item]);
    }

    function toggleCart() {
        setCartHidden((cartStatus) => {
            return !cartStatus;
        });
    }

    // render:
    return (
        <BrowserRouter>
            <div className='page-wrapper'>
                <NavBar handleCartClick={toggleCart} itemCount={cartItems.length} />
                <Cart
                    cartItems={cartItems}
                    handleCloseClick={toggleCart}
                    hidden={cartHidden} 
                />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/shop' element={<Shop addToCart={updateCart} cartItems={cartItems} />} />
                    <Route path='/shop/:itemId' element={<ItemPage />} />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    )
}