import React, { useState, useRef } from 'react';


const BookingForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const nameRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Booking Details:', { name, email, date });
    alert('Booking Successful!');
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
