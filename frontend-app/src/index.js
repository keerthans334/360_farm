// This file is the entry point of it  the JavaScript application. It  the renders the App component into the root div of the index.html file.

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/App.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
) ;