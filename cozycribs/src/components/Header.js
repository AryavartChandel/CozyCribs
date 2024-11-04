import React from 'react';
import '../styles/Header.css';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext'; 

const Header = () => {
    const { theme, toggleTheme } = useTheme(); 

    return (
    <header style={{ backgroundColor: theme.color === 'light' ? '#fff' : '#333' }}>
        <h1>Welcome to CozyCribs.com</h1>
        <nav>
            <ul>
            <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li> {/* Correct link for About Us */}
                <li><Link to="/amenities">Amenities</Link></li> {/* Correct link for Amenities */}
                <li><Link to="/contact">Contact</Link></li> {/* Correct link for Contact */}
                <li><Link to="/properties">Explore Our Properties</Link></li> {/* <-- Add this */}
                <li><Link to="/booking">Booking</Link></li> {/* New link */}
                <li><Link to="/feedback">Feedback</Link></li> {/* New link */}
            </ul>
        </nav>
        <button onClick={toggleTheme}>Toggle Theme</button>
    </header>
);
};
export default Header;
