import { createTheme, responsiveFontSizes } from '@material-ui/core';

import { GOLD, WHITE } from './Style';

const AppTheme1 = createTheme({
  palette: {
    primary: {
      main: GOLD,
    },
    secondary: {
      main: WHITE,
    },
  },
});

responsiveFontSizes(AppTheme1);

AppTheme1.typography.h1 = {
  fontWeight: 100,
  textAlign: 'center',
  paddingTop: 50,
  paddingBottom: 50,
};

AppTheme1.typography.h2 = {
  fontWeight: 100,
  textAlign: 'center',
};

const AppTheme2 = createTheme({
  palette: {
    primary: {
      main: WHITE,
    },
    secondary: {
      main: GOLD,
    },
  },
});

responsiveFontSizes(AppTheme2);

AppTheme2.typography.h1 = {
  fontWeight: 100,
  textAlign: 'center',
  paddingTop: 50,
  paddingBottom: 50,
};

AppTheme2.typography.h2 = {
  fontWeight: 100,
  textAlign: 'center',
};

export const Theme1 = AppTheme1;
export const Theme2 = AppTheme2;
