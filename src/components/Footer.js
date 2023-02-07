import React from 'react';

export default function Footer() {
    return (
        <footer>
            <span className='copyright'>copyright © {new Date().getFullYear()}</span>
            <a className='ssbbd-link' href='https://seanstephenbrian.github.io/ssbbd/' target='ssbbd' rel='noopener noreferrer'>ssbbd</a>
        </footer>
    )
}