import { createTheme } from '@mui/material';

const LightTheme = createTheme({

  breakpoints: {
    values: {
      xs: 360,
      sm: 680,
      md: 1100,
      lg: 1600,
      xl: 1900,
    }
  },

  palette: {
    mode: 'light',

    primary: {
      main: '#4078c0'
    },

    background: {
      default: '#EAEAEA',
      paper: '#f5f5f5',
    },

    error: {
      main: '#bd2c00',
    }
  },

  typography: {
    fontFamily: 'Noto Sans Syriac Eastern, sans-serif',
  },

  shape: {
    borderRadius: 8
  },

});

export default LightTheme;
