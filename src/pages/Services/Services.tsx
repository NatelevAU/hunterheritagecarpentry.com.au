import { Grid, Typography } from '@material-ui/core';
import React from 'react';

import './Services.css';

const Services = () => {
  return (
    <div className="Services">
      <header className="Services-header">
        <Typography variant="h1">our services</Typography>
      </header>
      <Grid container direction="row" justifyContent="center" alignItems="flex-start">
        <div className="Services-paragraph">
          <Typography variant="h2">Project Management</Typography>
          Their ageing materials are often irreplaceable, and the magnificent craftsmanship with
          which they were built is an art form in itself. Our aim is to preserve their historical
          footprint and maintain the beauty and elegance of an era gone by.
        </div>
        <div className="Services-paragraph">
          <Typography variant="h2">Custom Metal Fabrication</Typography>
          We can conserve, design and reproduce metalwork to restore heritage architecture in
          structural or non-structural applications.
        </div>
        <div className="Services-paragraph">
          <Typography variant="h2">Carpentry</Typography>
          We specialize in heritage preservation, conservation and restoration of all types of
          timber structures.
        </div>
        <div className="Services-paragraph">
          <Typography variant="h2">Roofing</Typography>
          All aspects of heritage roofing including copper, lead, zinc and slate.
        </div>
        <div className="Services-paragraph">
          <Typography variant="h2">Stabilisation</Typography>
          To preserve existing heritage integrity.
        </div>
        <div className="Services-paragraph">
          <Typography variant="h2">Joinery</Typography>
          Restoration or reproduction of all aspects of heritage joinery with a variety of timber
          species available. Custom pieces are our specialty.
        </div>
        <div className="Services-paragraph">
          <Typography variant="h2">Stonemasonry</Typography>
          Conservation and restoration of all types of stonework.
        </div>
        <div className="Services-paragraph">
          <Typography variant="h2">Ventilation</Typography>
          We are experienced in the design and installation of passive and powered ventilation.
        </div>
        <div className="Services-paragraph">
          <Typography variant="h2">Painting</Typography>
          Our painters are experienced in internal and external heritage restoration and
          preservation projects, both in the residential and public works domains.
        </div>
        <div className="Services-paragraph">
          <Typography variant="h2">Termite Repair</Typography>
          Structural and aesthetic restoration following termite invasion.
        </div>
        <div className="Services-paragraph">
          <Typography variant="h2">Plumbing</Typography>
        </div>
        <div className="Services-paragraph">
          <Typography variant="h2">Electrical</Typography>
        </div>
        <div className="Services-paragraph"></div>
        <div className="Services-paragraph">
          <Typography variant="h2">Brickwork</Typography>
        </div>
        <div className="Services-paragraph">
          <Typography variant="h2">Retaining Walls</Typography>
        </div>
      </Grid>
    </div>
  );
};

export default Services;
