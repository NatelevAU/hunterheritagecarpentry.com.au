import React from 'react';

import './Soon.css';
import logo from '../../images/logo.png';

const Soon = () => {
  return (
    <div className="Soon">
      <header className="Soon-header">
        <img src={logo} className="Soon-logo" alt="logo" />
        <h1>Coming soon</h1>
      </header>
    </div>
  );
};

export default Soon;
