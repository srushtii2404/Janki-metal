import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiSearch } from "react-icons/bi";
import { CiMenuFries } from "react-icons/ci";

import './Header.css'; 

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <div className="header-container">
                {/* Logo */}
                <div className="logo">
                    <Link to="/" className="logo-link">
                        <h1 className="logo-text desktop-logo">Janki Metal</h1>
                        <h1 className="logo-text mobile-logo">Janki Metal</h1>
                    </Link>
                </div>

                {/* Navigation Menu */}
                <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
                    <ul className="nav-list">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">About us</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link">Black Bars</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/products" className="nav-link">Bright Bars</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link">Steel Grades</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link">Infrastructure</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link">Applications</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link">Contact us</Link>
                        </li>
                    </ul>
                </nav>

                {/* User and Search Icons */}
                <div className="icon-container">
                    {/* Menu Icon */}
                    <button className="menu-button" onClick={toggleMenu}>
                        <CiMenuFries size={24} />
                    </button>
                    
                    {/* Search Icon */}
                    <button className="search-button">
                        <BiSearch size={24} />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
