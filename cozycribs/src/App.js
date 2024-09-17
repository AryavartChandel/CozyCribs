import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext'; 
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Amenities from './components/Amenities';
import Contact from './components/Contact';
import BookingForm from './components/BookingForm';
import FeedbackForm from './components/FeedbackForm';

const theme = { color: 'light' }; 

const App = () => {
    return (
        <ThemeProvider theme={theme}>
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/amenities" element={<Amenities />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/booking" element={<BookingForm />} />
                <Route path="/feedback" element={<FeedbackForm />} />
            </Routes>
            </Router>
    </ThemeProvider>
  );
};

export default App;
