import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const DadtiniDisplay = ({ drink }) => {
  const [creditVisible, setCreditVisible] = useState(false);
  // prevent credit from stickin around after drink is changed
  useEffect(() => {
    setCreditVisible(false);
  }, [drink.name]);

  return (
    <div className="dadtini-display">
      <div className="dadtini-display__image-container">
        {drink.image && 
          <img className="dadtini-display__image" src={drink.image} alt={drink.name} title={`Author: ${drink.imageTitle}`} />
        }
        {drink.imageTitle &&
          <>
            <div className={`dadtini-display__image-credit ${creditVisible && 'dadtini-display__image-credit--visible'}`}>{drink.imageTitle}</div>
            <button className="dadtini-display__image-set-credit" onClick={() => setCreditVisible(!creditVisible)}>Image credit</button>
          </>
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
