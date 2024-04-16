// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <div className='container'>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/aqi">AQI</Link>
          </li>
          <li>
            <Link to="/travel">GreenPath</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
