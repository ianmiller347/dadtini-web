import React, { useState } from 'react';
import { randomInt } from '../utils/helpers';
import DadtiniGenerator from '../components/DadtiniGenerator';
import './style.scss';

const getRandomColorRGB = () => {
  return `rgb(${randomInt(255)},${randomInt(255)},${randomInt(255)})`;
}

const Pages = () => {
  const [color, setColor] = useState();

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
