// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Import Router and Routes
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AQI from './pages/AQI';
import GreenPath from './pages/GreenPath';
import AboutUs from './pages/Aboutus';

const App = () => {
  return (
    <div>
     
      <Navbar />
      <Link to="/about">About Us</Link>
      <Link to="/aqi">AQI</Link>
      <Link to="/travel">GreenPath</Link>
      <Link to="/">Home</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aqi" element={<AQI />} />
        <Route path="/travel" element={<GreenPath />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
      </div>
  );
};

export default App;
