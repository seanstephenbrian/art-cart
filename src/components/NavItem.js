import React from 'react';

import { Link } from 'react-router-dom';

export default function NavItem(props) {
    // props:
    const { linkPath, navText } = props;

    // render:
    return (
        <Link to={`/${linkPath}`}>
            {navText}
        </Link>
    )
}