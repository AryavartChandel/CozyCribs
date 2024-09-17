import React, { useMemo } from 'react';
import { useTheme } from '../context/ThemeContext'; // Import useTheme
import '../styles.css';

const properties = [
    { id: 1, name: 'Cozy Cottage', price: 100 },
    { id: 2, name: 'Beach House', price: 150 },
    { id: 3, name: 'Mountain Cabin', price: 120 },
];


const Home = () => {
    const { theme } = useTheme();

    const expensiveFilter = useMemo(() => {
        return properties.filter(property => property.price > 120);
    }, []); // Only calculate once

    return (
        <section id="home">
            <h2>Discover Your Perfect Homestay</h2>
            <p className="intro">At CozyCribs, we offer a selection of charming and comfortable homestays designed to make you feel at home.</p>
            <p><span className="highlight">Why choose us?</span> We provide personalized services, unique local experiences, and a homely environment.</p>
            <p>Our goal is to make your stay memorable and enjoyable. <br /> Book with us today and enjoy the comfort of home, away from home.</p>
            <div className={theme}>
            <h2>Available Properties</h2>
            <ul>
                {expensiveFilter.map(property => (
                    <li key={property.id}>{property.name} - ${property.price}</li>
                ))}
            </ul>
        </div>
        </section>
        
    );
};

export default Home;
