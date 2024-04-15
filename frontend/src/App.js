import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import AQI from './pages/AQI';
import Travel from './pages/GreenPath';
import About from './pages/Aboutus';

const App = () => {
  return (
    <Router>
      <Navbar />
      {/* <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/aqi" component={AQI} />
        <Route path="/travel" component={Travel} />
        <Route path="/about" component={About} />
      </Switch> */}
    </Router>
  );
};

export default App;

