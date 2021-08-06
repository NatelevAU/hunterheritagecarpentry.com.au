import React from 'react';

import './About.css';

const About = () => {
  return (
    <div className="About">
      <header className="About-header">
        <h1>About Us</h1>
      </header>
      <div className="About-body">
        <h2>Who We Are</h2>
        <h2>Our Mission</h2>
        <h2>What We Do</h2>
      </div>
      <div className="About-body">
        <div className="About-border">
          <div className="About-paragraph">
            Hunter Heritage Carpentry is a Maitland based renovation, restoration and construction
            company that is passionate about heritage preservation. We can undertake both small and
            large-scale jobs with multiple complementing trades that are available through our vast
            network of contacts.
          </div>
        </div>
        <div className="About-border">
          <div className="About-paragraph">
            Heritage structures are rich with cultural significance. They tell the remarkable
            stories of those who dwelled and worked within their spaces. Their ageing materials are
            often irreplaceable, and the magnificent craftsmanship with which they were built is an
            art form in itself. Our aim is to preserve their historical footprint and maintain the
            beauty and elegance of an era gone by. It is our hope to see each special form restored
            so that its cultural value is preserved for future generations.
          </div>
        </div>
        <div className="About-border">
          <div className="About-paragraph">
            Our extensive experience with the varied trades involved in building projects ensures a
            smooth progression of the job through each phase to completion. It also enables us to
            come up with creative problem-solving strategies. We tie every element of the project
            together to ensure a seamless flow whilst maintaining close communication with our
            clients every step of the way to deliver a final product of the highest quality.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
