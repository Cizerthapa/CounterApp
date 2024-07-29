// Import necessary modules from React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Import the global CSS file
import Counter from './Counter'; // Import the Counter component

// Render the Counter component inside the root element
ReactDOM.render(
  <React.StrictMode>
    <Counter />
  </React.StrictMode>,
  document.getElementById('root')
);
