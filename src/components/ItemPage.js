import React, { useState, useEffect } from 'react';
import { Route, NavLink, Redirect } from 'react-router-dom';

export default function ItemPage({ match }) {

    useEffect(() => {
        console.log(match);
    }, []);

    return (
        <div>
            item page
        </div>
    )
}