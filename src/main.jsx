import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import React from 'react';
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux';

createRoot(document.getElementById('root')).render(
    <App />,
);