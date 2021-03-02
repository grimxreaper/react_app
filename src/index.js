import './App';
import React from 'react';
import RD from 'react-dom';
import './App.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';

RD.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// serviceWorker.unregister();