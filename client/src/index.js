import React from 'react';
import './index.css'
import {BrowserRouter as Router } from 'react-router-dom'
import ReactDOM from 'react-dom/client';
import App from './components/app/App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <App />
    </Router>
);

