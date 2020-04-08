import React, { useState } from 'react';
import './style.scss';

const randomInt = (max) => Math.floor(Math.random() * Math.floor(max));

const getRandomColorRGB = () => {
  return `rgb(${randomInt(255)},${randomInt(255)},${randomInt(255)})`;
}

const Pages = () => {
  const [color, setColor] = useState();

  return (
    <div 
      className="container"
      onClick={() => setColor(getRandomColorRGB())}
      style={ { backgroundColor: color || 'white'}}>
      <h1 className="title">dadtini's</h1>
      <p>dads can drink too</p>
    </div>
  );
};

export default Pages;
