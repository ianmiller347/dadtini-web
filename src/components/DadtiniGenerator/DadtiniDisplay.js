import React from 'react';
import PropTypes from 'prop-types';

const DadtiniDisplay = ({ drink }) => {
  return (
    <div className="dadtini-display">
      <h2>{drink.name}</h2>
      <div className="dadtini-display__image-container">
        {drink.image && 
          <img className="dadtini-display__image" src={drink.image} alt={drink.name} />
        }
      </div>
      <p>{drink.name} is a dadtini.</p>
      <p>{drink.description}</p>
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
