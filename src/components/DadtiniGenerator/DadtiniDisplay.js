import React, { useState } from 'react';
import PropTypes from 'prop-types';

const DadtiniDisplay = ({ drink }) => {
  const [credit, setCredit] = useState('');

  return (
    <div className="dadtini-display">
      <div className="dadtini-display__image-container">
        {drink.image && 
          <img className="dadtini-display__image" src={drink.image} alt={drink.name} title={`Author: ${drink.imageTitle}`} />
        }
        {credit &&
          <div className="dadtini-display__image-credit">{credit}</div>
        }
        {drink.imageTitle &&
          <button className="dadtini-display__image-set-credit" onClick={() => setCredit(drink.imageTitle)}>Image credit</button>
        }
      </div>
      <div className="dadtini-display__description">
        <h2>{drink.name}</h2>
        <p>{drink.name} is a dadtini.</p>
        <p>{drink.description}</p>
      </div>
    </div>
  );
};

DadtiniDisplay.propTypes = {
  drink: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string
  })
};

export default DadtiniDisplay;
