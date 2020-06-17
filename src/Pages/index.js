import React, { useState, useEffect } from 'react';
import ReactGA from 'react-ga';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { randomInt } from '../utils/helpers';
import Home from './Home';
import Games from './Games';
import './style.scss';

const getRandomColorRGB = () => {
  return `rgb(${randomInt(255)},${randomInt(255)},${randomInt(255)})`;
}

const Pages = () => {
  const [color, setColor] = useState();
  useEffect(() => {
    ReactGA.initialize('UA-163959709-1');
    const { pathname, search } = window.location;
    ReactGA.pageview(`${pathname}${search}`);
  }, []);

  return (
    <Router>
      <div 
        className="container"
        onClick={() => setColor(getRandomColorRGB())}
        style={ { backgroundColor: color || getRandomColorRGB()}}>
        <nav className="nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/games">Games</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route path="/games">
            <Games />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Pages;
