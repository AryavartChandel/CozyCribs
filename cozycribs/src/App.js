import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Amenities from './components/Amenities';
import Contact from './components/Contact';
import BookingForm from './components/BookingForm';
import FeedbackForm from './components/FeedbackForm';

const App = () => {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/amenities" element={<Amenities />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/booking" element={<BookingForm />} />
                <Route path="/feedback" element={<FeedbackForm />} />
            </Routes>
        </div>
    );
};

export default App;
