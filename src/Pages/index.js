import React, { useState, useEffect } from 'react';
import ReactGA from 'react-ga';
import { randomInt } from '../utils/helpers';
import DadtiniGenerator from '../components/DadtiniGenerator';
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
    <div 
      className="container"
      onClick={() => setColor(getRandomColorRGB())}
      style={ { backgroundColor: color || getRandomColorRGB()}}>
      <h1 className="title">dadtini</h1>
      <p>dads can drink too.</p>
      <DadtiniGenerator />
    </div>
  );
};

export default Pages;
