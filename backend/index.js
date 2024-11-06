const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// MySQL connection setup
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Your MySQL username
  password: '0000', // Your MySQL password
  database: 'cozycribsdatabase'
});

db.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// Endpoint to get houses
app.get('/api/houses', (req, res) => {
  const query = 'SELECT * FROM houses';
  db.query(query, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

// Endpoint for user bookings
app.post('/api/bookings', (req, res) => {
  const { name, email, bookingDate } = req.body;

  // Assuming you have a table 'bookings' and want to store user name, email, and date
  const query = 'INSERT INTO bookings (name, email, booking_date) VALUES (?, ?, ?)';
  db.query(query, [name, email, bookingDate], (err, result) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Booking failed');
      return;
    }
    res.send({ message: 'Booking successful', bookingId: result.insertId });
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});