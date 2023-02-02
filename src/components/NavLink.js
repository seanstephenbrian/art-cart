import React from 'react';

import { Link } from 'react-router-dom';

import '../styles/nav-link.scss';

export default function NavItem(props) {
    // props:
    const { linkPath, navText } = props;

    // render:
    return (
        <div className='nav-link shop-link'>
            <Link to={`/${linkPath}`}>
                <span className='link-text'>{navText}</span>
            </Link>
        </div>
        
    )
}