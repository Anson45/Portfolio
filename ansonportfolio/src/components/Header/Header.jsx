import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <header className="header section" id="header">
            <div className="headerTitle">
                <h1>Anson</h1>
            </div>
            <div className="headerNav">
                <nav>
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#services">Services</a>
                    {/*<a href="#qualification">Qualifications</a> 
                    <a href="#portfolio">Portfolio</a>
                    <a href="#testimonial">Testimonial</a> */}
                    <a href="#portfolio">Projects</a>
                    <a href="#contact">Contact</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
