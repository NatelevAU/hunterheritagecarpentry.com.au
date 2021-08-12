import { Box, Typography } from '@material-ui/core';
import React from 'react';

import { WHITE } from '../../Style';

import background from '../../images/backgrounds/Home.jpg';

const HomeStyle = {
  backgroundImage: `url(${background})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};

const Home = () => {
  return (
    <Box
      style={HomeStyle}
      color={WHITE}
      fontFamily="Cinzel Decorative"
      minHeight="100vh"
      display="flex"
      justifyContent="center"
      flexDirection="column"
    >
      <Typography variant="h1">
        hunter<br></br>heritage<br></br>carpentry
      </Typography>
      <Box fontSize={`calc(10px + 4vmin)`} marginLeft="7%" textAlign="left">
        <p>
          preservation and <br></br> restoration specialists
        </p>
      </Box>
    </Box>
  );
};

export default Home;
