import React from 'react';
import './styles.css'; // Import global styles
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import { ThemeProvider } from './context/ThemeContext'; // Import ThemeProvider
import { createRoot } from 'react-dom/client';
import App from './App';
const root = createRoot(document.getElementById('root'));
root.render(<App />);

