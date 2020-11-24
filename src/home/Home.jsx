import React from 'react';
import {
  // BrowserRouter as Router,
  HashRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
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

        <Router basename="/home">
          <nav>
            <Link to="/">Page1</Link> |{' '}
            <Link to="/page2">Page2</Link>
          </nav>
          <Switch>
            <Route path="/page2">
              <Page2></Page2>
            </Route>
            <Route path="/">
              <Page1></Page1>
            </Route>
          </Switch>
        </Router>
      </div>
    </GlobalContext.Provider>
  );
};

export default Home;
