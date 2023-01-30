// dependencies:
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

// components:
import Cart from './Cart';
import Footer from './Footer';
import Home from './Home';
import ItemPage from './ItemPage';
import NavBar from './NavBar';
import Shop from './Shop';

// styles:
import '../styles/app.scss';

export default function App() {
    
    // state:
    const [cartHidden, setCartHidden] = useState(true);
    const [inventory, setInventory] = useState([]);

    // on initial render:
    useEffect(() => {
        getInventory();
    }, []);

    // methods:
    async function getInventory() {
        fetch('art-data.json',
            {
                headers: { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
            .then((data) => data.json())
            .then((currentInventory) => {
                setInventory(currentInventory);
            });
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
                <NavBar handleCartClick={toggleCart} />
                <Cart hidden={cartHidden} />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/shop' element={<Shop items={inventory} />} />
                    <Route path='/shop/:itemId' element={<ItemPage items={inventory} />} />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    )
}