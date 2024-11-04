import React from 'react';
import '../styles/Amenities.css';

const Amenities = () => {
    return (
        <section id="amenities" className="amenities-container">
            <h2>Amenities</h2>
            <ul>
                <li className="amenity-item">Free Wi-Fi</li>
                <li className="amenity-item">24/7 Customer Support</li>
                <li className="amenity-item">Complimentary Breakfast</li>
            </ul>
            <ol>
                <li className="amenity-item">Spacious Rooms</li>
                <li className="amenity-item">Local Tours and Guides</li>
                <li className="amenity-item">Airport Transfers</li>
            </ol>
            <dl className="definition-list">
                <dt>Wi-Fi</dt>
                <dd>High-speed internet access available throughout the property.</dd>
                <dt>Breakfast</dt>
                <dd>A complimentary meal served each morning, including local specialties.</dd>
                <dt>Local Tours</dt>
                <dd>Guided tours of the local area to explore culture, history, and attractions.</dd>
            </dl>
        </section>
    );
};

export default Amenities;
