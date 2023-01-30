// dependencies:
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// components:
import Cart from './Cart';
import Footer from './Footer';
import Home from './Home';
import NavBar from './NavBar';
import Shop from './Shop';

// styles:
import '../styles/app.scss';

export default function App() {
    
    // state:
    const [cartHidden, setCartHidden] = useState(true);

    return (
        <BrowserRouter>
            <div className='page-wrapper'>
                <NavBar />
                <Cart hidden={cartHidden} />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/shop' element={<Shop />} />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    )
}