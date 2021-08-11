import { Grid } from '@material-ui/core';
import React from 'react';

import './Services.css';

const Services = () => {
  return (
    <div className="Services">
      <header className="Services-header">
        <h1>our services</h1>
      </header>
      <Grid container direction="row" justifyContent="center" alignItems="flex-start">
        <div className="Services-paragraph">
          <h2>Project management</h2>
          Their ageing materials are often irreplaceable, and the magnificent craftsmanship with
          which they were built is an art form in itself. Our aim is to preserve their historical
          footprint and maintain the beauty and elegance of an era gone by.
        </div>
        <div className="Services-paragraph">
          <h2>Custom Metal Fabrication</h2>
          We can conserve, design and reproduce metalwork to restore heritage architecture in
          structural or non-structural applications.
        </div>
        <div className="Services-paragraph">
          <h2>Carpentry</h2>
          We specialize in heritage preservation, conservation and restoration of all types of
          timber structures.
        </div>
        <div className="Services-paragraph">
          <h2>Roofing</h2>
          All aspects of heritage roofing including copper, lead, zinc and slate.
        </div>
        <div className="Services-paragraph">
          <h2>Stabilisation</h2>
          To preserve existing heritage integrity.
        </div>
        <div className="Services-paragraph">
          <h2>Joinery</h2>
          Restoration or reproduction of all aspects of heritage joinery with a variety of timber
          species available. Custom pieces are our specialty.
        </div>
        <div className="Services-paragraph">
          <h2>Stonemasonry</h2>
          Conservation and restoration of all types of stonework.
        </div>
        <div className="Services-paragraph">
          <h2>Ventilation</h2>
          We are experienced in the design and installation of passive and powered ventilation.
        </div>
        <div className="Services-paragraph">
          <h2>Painting</h2>
          Our painters are experienced in internal and external heritage restoration and
          preservation projects, both in the residential and public works domains.
        </div>
        <div className="Services-paragraph">
          <h2>Termite Repair</h2>
          Structural and aesthetic restoration following termite invasion.
        </div>
        <div className="Services-paragraph">
          <h2>Plumbing</h2>
        </div>
        <div className="Services-paragraph">
          <h2>Electrical</h2>
        </div>
        <div className="Services-paragraph"></div>
        <div className="Services-paragraph">
          <h2>Brickwork</h2>
        </div>
        <div className="Services-paragraph">
          <h2>Retaining Walls</h2>
        </div>
      </Grid>
    </div>
  );
};

export default Services;
