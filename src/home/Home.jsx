import React from 'react';
import {Router, Link} from '@reach/router';
import GlobalContext from './GlobalContext';
import Header from '../components/Header';
import Page1 from '../page1/page1';
import Page2 from '../page2/page2';

import bgImg from '../assets/images/bg.jpg';

const Home = () => {
  const contextValue = {
    title: 'webpack4-for-react',
    author: 'tianhao feng',
  };
  return (
    <GlobalContext.Provider value={contextValue}>
      <div className="home-page">
        <Header title="Home"></Header>
        <div>
          <i className="fas fa-home"></i>
        </div>
        <img src={bgImg} />

        <nav>
          <Link to="/home/">Page1</Link> |{' '}
          <Link to="/home/page2">Page2</Link>
        </nav>
        <Router basepath="/home">
          <Page1 path="/"></Page1>
          <Page2 path="page2"></Page2>
        </Router>
      </div>
    </GlobalContext.Provider>
  );
};

export default Home;
