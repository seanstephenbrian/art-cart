import React from 'react';

import { Link } from 'react-router-dom';

import '../styles/nav-item.scss';

export default function NavItem(props) {
    // props:
    const { linkPath, navText } = props;

    // render:
    return (
        <Link className='nav-link' to={`/${linkPath}`}>
            {navText}
        </Link>
    )
}