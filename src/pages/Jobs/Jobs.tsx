import React from 'react';

import './Jobs.css';
import Image1 from '../../images/jobs/Job1.jpeg';
import Image2 from '../../images/jobs/Job2.jpg';
import Image3 from '../../images/jobs/Job3.jpg';
import Image4 from '../../images/jobs/Job4.jpg';
import Image5 from '../../images/jobs/Job5.jpg';
import Image6 from '../../images/jobs/Job6.jpg';

const Jobs = () => {
  return (
    <div className="Jobs">
      <header className="Jobs-header">
        <h1>past projects</h1>
      </header>
      <div className="Jobs-body">
        <div>
          <img src={Image1} className="Jobs-image" alt="" />
        </div>
        <div>
          <h2>The Great Northern Hotel</h2>
          <div className="Jobs-paragraph">
            We conducted a heritage audit on the hotel windows with a view of returning them back to
            their original state. Additionally, we conducted a safety audit, brought the site up to
            standard, and constructed shelters to protect the building.
          </div>
        </div>
        <div>
          <h2>The Old Newcastle Courthouse</h2>
          <div className="Jobs-paragraph">
            We restored the windows, doors, skirting, architraves and trim, reproducing any that
            were missing or couldn’t be salvaged.
          </div>
        </div>
        <div>
          <img src={Image2} className="Jobs-image" alt="" />
        </div>
        <div>
          <img src={Image3} className="Jobs-image" alt="" />
        </div>
        <div>
          <h2>Hamilton Signal Box</h2>
          <div className="Jobs-paragraph" style={{ marginLeft: 40, marginRight: 40 }}>
            We installed a mantlepiece, replaced skirting boards, trim and aluminium windows with
            timber reproductions that were as closely matched to the originals as we could ascertain
            from inspecting the building, old photographs and consulting with heritage architects.
          </div>
        </div>
        <div>
          <h2>Newcastle Art TAFE</h2>
          <div className="Jobs-paragraph">
            We managed the third and final stage of restoration, which included the replacement of
            ornate stonework, leadwork and carpentry. This was a very rewarding state heritage
            project to be involved in.
          </div>
        </div>
        <div>
          <img src={Image4} className="Jobs-image" alt="" />
        </div>
        <div>
          <img src={Image5} className="Jobs-image" alt="" />
        </div>
        <div>
          <h2>Clive Lodge</h2>
          <div className="Jobs-paragraph">
            We replaced the balustrading, reproducing them as closely to the originals as we could
            determine from old photographs.
          </div>
        </div>
        <div>
          <h2>The Rigby</h2>
          <div className="Jobs-paragraph">
            We transformed this iconic Maitland building into a stylish restaurant and bar,
            retaining as much of the original fabric as we could.
          </div>
        </div>
        <div>
          <img src={Image6} className="Jobs-image" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Jobs;
