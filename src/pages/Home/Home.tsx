import { Box, Typography } from '@mui/material';

import { WHITE } from '../../Style';

import background from '../../images/backgrounds/Home.jpg';

const Home = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        color: WHITE,
        fontFamily: 'Cinzel Decorative',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <Typography variant="h1">
        hunter
        <br />
        heritage
        <br />
        carpentry
      </Typography>
      <Box sx={{ fontSize: 'calc(10px + 4vmin)', marginLeft: '7%', textAlign: 'left' }}>
        <p>
          preservation and <br />
          restoration specialists
        </p>
      </Box>
    </Box>
  );
};

export default Home;
