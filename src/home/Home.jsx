import React from 'react';

import bgImg from '../assets/images/bg.jpg';

const Home = () => {
  return (
    <div className="home-page">
      <h1>Home</h1>
      <div>
        <i className="fas fa-home"></i>
      </div>
      <img src={bgImg} />
    </div>
  );
};

export default Home;
