import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiSearch } from "react-icons/bi";
import { CiMenuFries } from "react-icons/ci";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header secondery-shadow">
            <div className="header-container">
                {/* Logo */}    
                <div className="logo">
                    <Link to="/" className="logo-link">
                        <h1 className="logo-text desktop-logo">Janki Metal</h1>
                        <h1 className="logo-text mobile-logo">Janki Metal</h1>
                    </Link>
                </div>

                {/* Navigation Menu */}
                <a href="#menu" id="toggle"><span></span></a>
                {/* overlay */}
                <nav id='menu' className={`nav-menu ${isMenuOpen ? 'open' : ''}` }>
                    <ul className="nav-list">
                        <li className="nav-item">
                            <Link to="/aboutus" className="nav-link">About us</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/blackbars" className="nav-link">Black Bars</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/brightbars" className="nav-link">Bright Bars</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/steelgrades" className="nav-link">Steel Grades</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/infrastructure" className="nav-link">Infrastructure</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/applications" className="nav-link">Applications</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contactus" className="nav-link">Contact us</Link>
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
