import { createTheme, responsiveFontSizes } from '@mui/material';
import type { TypographyProps } from '@mui/material/Typography';

import { GOLD, WHITE } from './Style';

const baseThemeOptions = {
  typography: {
    fontFamily: 'Cinzel Decorative, Arial, sans-serif',
    h1: {
      fontSize: '4rem',
      fontWeight: 500,
      textAlign: 'center' as TypographyProps['align'],
      paddingTop: '50px',
      paddingBottom: '50px',
      textTransform: 'lowercase' as const,
      fontFamily: 'Cinzel Decorative, Arial, sans-serif',
      '@media (min-width:600px)': {
        fontSize: '2.8rem',
      },
    },
    h2: {
      fontSize: '3rem',
      fontWeight: 100,
      textAlign: 'center' as TypographyProps['align'],
      textTransform: 'lowercase' as const,
      fontFamily: 'Cinzel Decorative, Arial, sans-serif',
      '@media (min-width:600px)': {
        fontSize: '1.85rem',
      },
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
};

const AppTheme1 = createTheme({
  ...baseThemeOptions,
  palette: {
    mode: 'light',
    primary: {
      main: GOLD,
    },
    secondary: {
      main: WHITE,
    },
  },
});

const theme1 = responsiveFontSizes(AppTheme1, {
  breakpoints: ['sm', 'md', 'lg'],
});

const AppTheme2 = createTheme({
  ...baseThemeOptions,
  palette: {
    mode: 'light',
    primary: {
      main: WHITE,
    },
    secondary: {
      main: GOLD,
    },
  },
});

const theme2 = responsiveFontSizes(AppTheme2, {
  breakpoints: ['sm', 'md', 'lg'],
});

export const Theme1 = theme1;
export const Theme2 = theme2;
