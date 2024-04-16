// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import the home.css file

const Home = () => {
    return (
        <div className="home-container">
            <h1>Sustainable Cities and<br></br> Communities</h1>
            <p>Explore our features:</p>
            <div className="button-container">
                <Link to="/aqi" className="button">AQI</Link>
                <Link to="/greenpath" className="button">Green Path</Link>
                <Link to="/about" className="button">About us</Link>
            </div>
        </div>
    );
};

export default Home;
