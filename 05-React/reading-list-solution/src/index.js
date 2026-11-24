import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // StrictMode renders components (and runs effects) twice in development
  // to reveal impure render logic and missing effect cleanups.
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
