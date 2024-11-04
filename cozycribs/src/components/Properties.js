import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/Properties.css' // Ensure you're importing your CSS file

const Properties = () => {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/houses')
      .then(response => setHouses(response.data))
      .catch(error => console.error('Error fetching houses:', error));
  }, []);

  return (
    <div className="properties-container">
      <h2>Explore Our Properties</h2>
      <div className="properties-grid">
        {houses.map(house => (
          <div key={house.id} className="property-tile">
            <img src={house.image_url} alt={house.name} className="property-image" />
            <h3>{house.name}</h3>
            <p>{house.location}</p>
            <p>${house.price} per night</p>
            <button className="book-button" onClick={() => handleBooking(house.id)}>Book Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

const handleBooking = (houseId) => {
  const userId = 1; // Assuming you have a user ID
  const bookingDate = new Date().toISOString().split('T')[0];

  axios.post('http://localhost:5000/api/bookings', {
    userId,
    houseId,
    bookingDate
  })
  .then(response => alert(response.data.message))
  .catch(error => console.error('Error making booking:', error));
};

export default Properties;
