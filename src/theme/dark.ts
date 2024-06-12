import { createTheme } from "@mui/material";

const DarkTheme = createTheme({

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
    mode: 'dark',

    primary: {
      main: '#4078c0',
    },

    background: {
      default: '#181818',
      paper: '#0d1117',
    },

    error: {
      main: '#bd2c00',
    },   
  },


  typography: {
    fontFamily: 'Noto Sans Syriac Eastern, sans-serif',
  },

  shape: {
    borderRadius: 8
  },

});

export default DarkTheme;
