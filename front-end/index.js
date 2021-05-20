import React from 'react';
import { render } from 'react-dom';
// import './index.css'; // css file
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';

// Render the react DOM
render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector('#root')
);