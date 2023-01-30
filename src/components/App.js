// dependencies:
import React from 'react';
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
    return (
        <BrowserRouter>
            <div className='page-wrapper'>
                <NavBar />
                <Cart />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/shop' element={<Shop />} />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    )
}