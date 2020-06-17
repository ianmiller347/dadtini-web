import React from 'react';
import DadtiniGenerator from '../components/DadtiniGenerator';
import './style.scss';

const Home = () => {
  return (
    <div className="page page--home">
      <h1 className="title">dadtini</h1>
      <p>dads can drink too.</p>
      <DadtiniGenerator />
    </div>
  );
};

export default Home;
