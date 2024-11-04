import React from 'react';
import './styles/index.css'; 
import { BrowserRouter } from 'react-router-dom'; 
import { ThemeProvider } from './context/ThemeContext'; 
import { createRoot } from 'react-dom/client';
import App from './App';
const root = createRoot(document.getElementById('root'));
root.render(<App />);

