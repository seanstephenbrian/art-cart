// dependencies:
import React, { useState } from 'react';
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

    // methods:
    function toggleCart() {
        setCartHidden((cartStatus) => {
            return !cartStatus;
        });
    }

    // render:
    return (
        <BrowserRouter>
            <div className='page-wrapper'>
                <NavBar handleCartClick={toggleCart} />
                <Cart hidden={cartHidden} />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/shop' element={<Shop />} />
                    <Route path='/shop/:itemId' element={<ItemPage />} />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    )
}