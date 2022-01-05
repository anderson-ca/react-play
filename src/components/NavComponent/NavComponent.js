import React from 'react';
import './NavComponent.css';

const NavComponent = () => {
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="/" className="brand-logo">RickPedia</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="sass.html">Home</a></li>
                    <li><a href="badges.html">About</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavComponent
