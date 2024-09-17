import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Amenities from './components/Amenities';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles.css';  // Global CSS

function App() {
  return (
    <div>
      <Header />
      <main>
        <Home />
        <About />
        <Amenities />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
