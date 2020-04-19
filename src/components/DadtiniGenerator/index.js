import React, { useState } from 'react';
import ReactGA from 'react-ga';
import { dadDrinks } from '../../data/dadtini-data';
import { randomInt } from '../../utils/helpers';
import DadtiniDisplay from './DadtiniDisplay';
import './style.scss';

const randomDrink = (currentDrink) => {
  const otherDrinks = currentDrink 
    ? dadDrinks.filter(dadDrink => dadDrink.name !== currentDrink.name)
    : dadDrinks;
  const max = otherDrinks.length;
  return otherDrinks[randomInt(max)];
}

const handleGenerate = (setDrink, drink) => {
  const newDrink = randomDrink(drink);
  setDrink(newDrink);
  ReactGA.event({
    category: 'generate-drink',
    action: 'clicked',
    label: `Generated ${newDrink.name}`,
  });
}

const DadtiniGenerator = () => {
  const [drink, setDrink] = useState(null);

  const buttonText = drink ? 'Another dadtini?' : `What's a dadtini?`;
  return (
    <div className="dadtini-generator">
      <button 
        className="dadtini-generator__button" 
        onClick={() => handleGenerate(setDrink, drink)}
        title="Find a dadtini"
      >
        {buttonText}
      </button>
      {drink && <DadtiniDisplay drink={drink} />}
    </div>
  );
};

export default DadtiniGenerator;
