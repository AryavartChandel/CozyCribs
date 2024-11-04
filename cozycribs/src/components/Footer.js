import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer>
            <p>&copy; 2024 CozyCribs.com. All Rights Reserved.</p>
            <div className="footer-links">
                <a href="/privacy-policy">Privacy Policy</a>
                <span>|</span>
                <a href="/terms-of-service">Terms of Service</a>
                <span>|</span>
                <a href="/contact">Contact Us</a>
            </div>
        </footer>
    );
};

export default Footer;
