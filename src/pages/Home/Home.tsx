import React from 'react';

import './Home.css';
import background from '../../images/backgrounds/Home3.jpg';

const homeStyle = {
  backgroundImage: `url(${background})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};

const Home = () => {
  return (
    <div className="Home" style={homeStyle}>
      <header className="Home-header">
        <h1>PRESERVATION AND RESTORATION SPECIALISTS</h1>
      </header>
    </div>
  );
};

export default Home;
