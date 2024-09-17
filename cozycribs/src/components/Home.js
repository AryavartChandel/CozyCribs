// src/components/Home.js
import React, { useMemo } from 'react';
import { useTheme } from '../context/ThemeContext'; // Import useTheme
import './Home.css'; // CSS file for homepage styling

const properties = [
    { id: 1, name: 'Cozy Cottage', price: 100 },
    { id: 2, name: 'Beach House', price: 150 },
    { id: 3, name: 'Mountain Cabin', price: 120 },
];

const Home = () => {
    const { theme, toggleTheme } = useTheme(); 

    const expensiveFilter = useMemo(() => {
        return properties.filter(property => property.price > 120);
    }, []); // Only calculate once

    return (
        <div className={`home-container ${theme}`}>
            {/* Hero Section */}
            <section className="hero">
                <img src="/images/hero.jpg" alt="Cozy Home" className="hero-image" />
                <div className="hero-text">
                    <h1>Welcome to CozyCribs</h1>
                    <p>Your perfect home away from home.</p>
                </div>
            </section>

            {/* About Section */}
            <section className="about">
                <h2>About CozyCribs</h2>
                <p>
                    CozyCribs offers handpicked stays in the most beautiful locations. Whether you’re looking 
                    for a quiet escape or a family getaway, our homes are curated for comfort and luxury.
                </p>
            </section>

            {/* Features Section */}
            <section className="features">
                <h2>Why Choose Us?</h2>
                <div className="feature-list">
                    <div className="feature">
                        <img src="/images/feature1.jpg" alt="Cozy Rooms" />
                        <h3>Cozy Rooms</h3>
                        <p>Experience the warmth and comfort in our beautifully designed rooms.</p>
                    </div>
                    <div className="feature">
                        <img src="/images/feature2.jpg" alt="Scenic Views" />
                        <h3>Scenic Views</h3>
                        <p>Wake up to breathtaking views right from your window.</p>
                    </div>
                    <div className="feature">
                        <img src="/images/feature3.jpg" alt="Modern Amenities" />
                        <h3>Modern Amenities</h3>
                        <p>Enjoy top-notch facilities including Wi-Fi, pool, and more.</p>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="gallery">
                <h2>Explore Our Properties</h2>
                <div className="gallery-images">
                    <img src="/images/gallery1.jpeg" alt="Gallery Image 1" />
                    <img src="/images/gallery2.jpeg" alt="Gallery Image 2" />
                    <img src="/images/gallery3.jpg" alt="Gallery Image 3" />
                </div>
            </section>

            {/* Available Properties Section */}
            <section className="available-properties">
                <h2>Available Properties</h2>
                <ul>
                    {expensiveFilter.map(property => (
                        <li key={property.id}>{property.name} - ${property.price}</li>
                    ))}
                </ul>
            </section>

            {/* Call to Action Section */}
            <section className="call-to-action">
                <h2>Ready to Book?</h2>
                <p>Start your journey by choosing the perfect home-stay for you.</p>
                <a href="/booking" className="cta-button">Book Now</a>
            </section>
        </div>
    );
};

export default Home;
