import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Importing the CSS file where Tailwind is configured
import App from './App';
import { data } from 'autoprefixer';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

