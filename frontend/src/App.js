// App.js
import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AQI from './pages/AQI';
import GreenPath from './pages/GreenPath';
import AboutUs from './pages/Aboutus';

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
