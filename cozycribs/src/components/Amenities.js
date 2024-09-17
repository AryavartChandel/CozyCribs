import React from 'react';
import '../styles.css';

const Amenities = () => {
    return (
        <section id="amenities">
            <h2>Amenities</h2>
            <ul>
                <li>Free Wi-Fi</li>
                <li>24/7 Customer Support</li>
                <li>Complimentary Breakfast</li>
            </ul>
            <ol>
                <li>Spacious Rooms</li>
                <li>Local Tours and Guides</li>
                <li>Airport Transfers</li>
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
