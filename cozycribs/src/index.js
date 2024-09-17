import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css'; // Import global styles
import App from './App'; // Import App component
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
