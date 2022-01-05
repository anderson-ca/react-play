import React from 'react';
import './NavComponent.css';

const NavComponent = () => {
    return (
        <nav>
            <div class="nav-wrapper">
                <a href="/" class="brand-logo">Playground</a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><a href="sass.html">Home</a></li>
                    <li><a href="badges.html">About</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavComponent
