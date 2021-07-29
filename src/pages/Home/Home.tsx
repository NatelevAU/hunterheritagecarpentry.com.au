import React from 'react';

import './Home.css';
import logo from '../../images/logo.png';

const Home = () => {
  return (
    <div className="Home">
      <header className="Home-header">
        <img src={logo} className="Home-logo" alt="logo" />
        <h1>Coming soon</h1>
      </header>
    </div>
  );
};

export default Home;
