import { Box, Typography } from '@material-ui/core';
import React from 'react';
import ImageGallery from 'react-image-gallery';

import './Jobs.css';
import Image1 from '../../images/jobs/Job1.jpeg';
import Image2 from '../../images/jobs/Job2.jpg';
import Image3 from '../../images/jobs/Job3.jpg';
import Image4 from '../../images/jobs/Job4.jpg';
import Image5 from '../../images/jobs/Job5.jpg';
import Image6 from '../../images/jobs/Job6.jpg';

const Images = [
  {
    original: Image1,
    description: 'The Great Northern Hotel',
  },
  {
    original: Image2,
    description: '',
  },
  {
    original: Image3,
    description: '',
  },
  {
    original: Image4,
    description: '',
  },
  {
    original: Image5,
    description: '',
  },
  {
    original: Image6,
    description: '',
  },
];

const Jobs = () => {
  const myRef = React.useRef<ImageGallery>(null);
  const [currentIndex, setCurrentIndex] = React.useState<number>(1);

  return (
    <div className="Jobs">
      <header className="Jobs-header">
        <Typography variant="h1">past projects</Typography>
      </header>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
      >
        <ImageGallery
          ref={myRef}
          items={Images}
          showIndex={true}
          onSlide={() => {
            if (myRef.current?.getCurrentIndex) {
              setCurrentIndex(myRef.current.getCurrentIndex() + 1);
            }
          }}
        />
        {currentIndex == 1 && (
          <div className="Jobs-paragraph">
            <Typography variant="h2">The Great Northern Hotel</Typography>
            We conducted a heritage audit on the hotel windows with a view of returning them back to
            their original state. Additionally, we conducted a safety audit, brought the site up to
            standard, and constructed shelters to protect the building.
          </div>
        )}
        {currentIndex == 2 && (
          <div className="Jobs-paragraph">
            <Typography variant="h2">The Old Newcastle Courthouse</Typography>
            We restored the windows, doors, skirting, architraves and trim, reproducing any that
            were missing or couldn’t be salvaged.
          </div>
        )}
        {currentIndex == 3 && (
          <div className="Jobs-paragraph" style={{ marginLeft: 40, marginRight: 40 }}>
            <Typography variant="h2">Hamilton Signal Box</Typography>
            We installed a mantlepiece, replaced skirting boards, trim and aluminium windows with
            timber reproductions that were as closely matched to the originals as we could ascertain
            from inspecting the building, old photographs and consulting with heritage architects.
          </div>
        )}
        {currentIndex == 4 && (
          <div className="Jobs-paragraph">
            <Typography variant="h2">Newcastle Art TAFE</Typography>
            We managed the third and final stage of restoration, which included the replacement of
            ornate stonework, leadwork and carpentry. This was a very rewarding state heritage
            project to be involved in.
          </div>
        )}
        {currentIndex == 5 && (
          <div className="Jobs-paragraph">
            <Typography variant="h2">Clive Lodge</Typography>
            We replaced the balustrading, reproducing them as closely to the originals as we could
            determine from old photographs.
          </div>
        )}
        {currentIndex == 6 && (
          <div className="Jobs-paragraph">
            <Typography variant="h2">The Rigby</Typography>
            We transformed this iconic Maitland building into a stylish restaurant and bar,
            retaining as much of the original fabric as we could.
          </div>
        )}
      </Box>
    </div>
  );
};

export default Jobs;
