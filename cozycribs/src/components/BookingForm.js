import React, { useState, useRef } from 'react';
import axios from 'axios';
import '../styles/BookingForm.css'
const BookingForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const nameRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare booking data
    const bookingData = {
      name: name,
      email: email,
      bookingDate: date
    };

    // Send booking data to backend
    axios.post('http://localhost:5000/api/bookings', bookingData)  // Corrected URL
      .then(response => {
        console.log('Booking successful:', response.data);
        alert('Booking Successful!');
      })
      .catch(error => {
        console.error('Error booking:', error);
        alert('Booking failed! Please try again.');
      });

    // Clear form after submission
    setName('');
    setEmail('');
    setDate('');
  };

  return (
    <div className="form-container">
      <h2>Book Your Stay</h2>
      <form onSubmit={handleSubmit}>
      <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            ref={nameRef}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Check-in Date:
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </label>
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
};

export default BookingForm;
