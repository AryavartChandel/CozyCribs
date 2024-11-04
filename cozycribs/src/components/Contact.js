import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact-container">
            <h2>Contact Us</h2>
            <p>For bookings and inquiries, reach us at:</p>
            <p>Email: <a href="mailto:info@cozycribs.com">info@cozycribs.com</a> <br /> Phone: 123-456-7890</p>
            <form className="contact-form">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" placeholder="Your Name" required />
                
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" placeholder="Your Email" required />

                <label htmlFor="message">Message:</label>
                <textarea id="message" placeholder="Your Message" rows="4" required></textarea>
                
                <button type="submit">Send Message</button>
            </form>
        </section>
    );
};

export default Contact;
