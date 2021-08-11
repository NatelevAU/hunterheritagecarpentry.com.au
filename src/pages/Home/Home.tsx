import React from 'react';

import './Home.css';
import background from '../../images/backgrounds/Home.jpg';

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
        <h1>
          hunter<br></br>heritage<br></br>carpentry
        </h1>
      </header>
      <body className="Home-body">
        <p>
          preservation and <br></br> restoration specialists
        </p>
      </body>
    </div>
  );
};

export default Home;
