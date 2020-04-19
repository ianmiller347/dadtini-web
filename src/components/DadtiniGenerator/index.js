import React, { useState } from 'react';
import { dadDrinks } from '../../data/dadtini-data';
import { randomInt } from '../../utils/helpers';
import DadtiniDisplay from './DadtiniDisplay';
import './style.scss';

const randomDrink = (currentDrink) => {
  const otherDrinks = currentDrink 
    ? dadDrinks.filter(dadDrink => dadDrink.name !== currentDrink.name)
    : dadDrinks;
  const max = otherDrinks.length - 1;
  return otherDrinks[randomInt(max)];
}

const DadtiniGenerator = () => {
  const [drink, setDrink] = useState(null);

  const buttonText = drink ? 'Another dadtini?' : `What's a dadtini?`;
  return (
    <div className="dadtini-generator">
      <button 
        className="dadtini-generator__button" 
        onClick={() => setDrink(randomDrink(drink))}
        title="Find a dadtini"
      >
        {buttonText}
      </button>
      {drink && <DadtiniDisplay drink={drink} />}
    </div>
  );
};

export default DadtiniGenerator;
