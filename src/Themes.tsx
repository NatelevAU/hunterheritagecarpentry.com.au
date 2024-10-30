import { createTheme, responsiveFontSizes } from '@mui/material';

import { GOLD, WHITE } from './Style';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    h1: React.CSSProperties;
    h2: React.CSSProperties;
  }
}

const AppTheme1 = createTheme({
  typography: {
    fontFamily: 'Cinzel Decorative, Arial, sans-serif',
    h1: {
      fontSize: '4rem',
      fontWeight: 500,
      textAlign: 'center',
      paddingTop: 50,
      paddingBottom: 50,
      textTransform: 'lowercase',
      fontFamily: 'Cinzel Decorative, Arial, sans-serif',
      '@media (min-width:600px)': {
        fontSize: '2.8rem',
      },
    },
    h2: {
      fontSize: '3rem',
      fontWeight: 100,
      textAlign: 'center',
      textTransform: 'lowercase',
      fontFamily: 'Cinzel Decorative, Arial, sans-serif',
      '@media (min-width:600px)': {
        fontSize: '1.85rem',
      },
    },
  },
  palette: {
    primary: {
      main: GOLD,
    },
    secondary: {
      main: WHITE,
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: 'h1',
          h2: 'h2',
        },
      },
    },
  },
});

const theme1 = responsiveFontSizes(AppTheme1, {
  breakpoints: ['sm', 'md', 'lg'],
});

const AppTheme2 = createTheme({
  typography: {
    fontFamily: 'Cinzel Decorative, Arial, sans-serif',
    h1: {
      fontSize: '4rem',
      fontWeight: 100,
      textAlign: 'center',
      paddingTop: 50,
      paddingBottom: 50,
      textTransform: 'lowercase',
      fontFamily: 'Cinzel Decorative, Arial, sans-serif',
      '@media (min-width:600px)': {
        fontSize: '2.8rem',
      },
    },
    h2: {
      fontSize: '3rem',
      fontWeight: 100,
      textAlign: 'center',
      textTransform: 'lowercase',
      fontFamily: 'Cinzel Decorative, Arial, sans-serif',
      '@media (min-width:600px)': {
        fontSize: '1.85rem',
      },
    },
  },
  palette: {
    primary: {
      main: WHITE,
    },
    secondary: {
      main: GOLD,
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: 'h1',
          h2: 'h2',
        },
      },
    },
  },
});

const theme2 = responsiveFontSizes(AppTheme2, {
  breakpoints: ['sm', 'md', 'lg'],
});

export const Theme1 = theme1;
export const Theme2 = theme2;
