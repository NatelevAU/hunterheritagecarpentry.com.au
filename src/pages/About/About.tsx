import { Box, Grid, Typography } from '@mui/material';

import './About.css';

const About = () => {
  return (
    <Box className="About">
      <header className="About-header">
        <Typography variant="h1">about us</Typography>
      </header>
      <Box>
        <Grid container direction="row" justifyContent="space-evenly">
          <Box>
            <Typography variant="h2">who we are</Typography>
            <Box className="About-paragarph">
              Hunter Heritage Carpentry is a Maitland based renovation, restoration and construction
              company that is passionate about heritage preservation. We can undertake both small
              and large-scale jobs with multiple complementing trades that are available through our
              vast network of contacts.
            </Box>
          </Box>
          <Box>
            <Typography variant="h2">our mission</Typography>
            <Box className="About-paragarph">
              Heritage structures are rich with cultural significance. They tell the remarkable
              stories of those who dwelled and worked within their spaces. Their ageing materials
              are often irreplaceable, and the magnificent craftsmanship with which they were built
              is an art form in itself. Our aim is to preserve their historical footprint and
              maintain the beauty and elegance of an era gone by. It is our hope to see each special
              form restored so that its cultural value is preserved for future generations.
            </Box>
          </Box>
          <Box>
            <Typography variant="h2">what we do</Typography>
            <Box className="About-paragarph">
              Our extensive experience with the varied trades involved in building projects ensures
              a smooth progression of the job through each phase to completion. It also enables us
              to come up with creative problem-solving strategies. We tie every element of the
              project together to ensure a seamless flow whilst maintaining close communication with
              our clients every step of the way to deliver a final product of the highest quality.
            </Box>
          </Box>
        </Grid>
      </Box>
    </Box>
  );
};

export default About;
