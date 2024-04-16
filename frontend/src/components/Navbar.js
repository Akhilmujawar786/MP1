import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './Navbar.css';

const Navbar = ({ isLoggedIn }) => {
  console.log('is logged in' + isLoggedIn); // Log the value of isLoggedIn outside JSX
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
          {/* {isLoggedIn && ( // Render GreenPath link only if user is logged in
            <li>
              <Link to="/travel">GreenPath</Link>
            </li>
          )} */}
          <li>
          <Link to="/travel">GreenPath   </Link>
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
