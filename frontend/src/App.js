// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import GreenPath from './pages/GreenPath';
import Login from './components/Login1';
import AQI from './pages/AQI';
import Aboutus from './pages/Aboutus';
import Signup from './components/Signup';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();

  return (
    <div className="App">
      
        <Navbar isLoggedIn={isLoggedIn} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/travel" element={isLoggedIn ? <GreenPath /> : <Login setLoggedIn={setIsLoggedIn} destination={location.pathname} />} />
          <Route path="/aqi" element={isLoggedIn ? <AQI /> : <Login setLoggedIn={setIsLoggedIn} destination={location.pathname} />} />
          <Route path="/login" element={<Login setLoggedIn={setIsLoggedIn} destination={location.pathname} />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      
    </div>
  );
}

export default App;
