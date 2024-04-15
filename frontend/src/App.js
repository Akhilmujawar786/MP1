// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import AQI from './AQI';
import GreenPath from './GreenPath';
import AboutUs from './AboutUs';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/aqi" component={AQI} />
        <Route path="/travel" component={GreenPath} />
        <Route path="/about" component={AboutUs} />
      </Switch>
    </Router>
  );
};

export default App;
