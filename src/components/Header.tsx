// @ts-ignore
import React from 'react';

import '../styles/global.css';
import '../styles/Header.module.css';

const Header = () => {
    return (

        <header className="header">
            <div className="header-content">
                <h1 className="name">Deniz Yavuzkaya</h1>
                <nav className="nav">
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </nav>
            </div>
        </header>
    );
};
export default Header;