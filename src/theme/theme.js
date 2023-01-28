import { createTheme } from '@mui/material/styles';

export const appTheme = createTheme({
  palette: {
    primary: {
      main: '#f59256',
    },
    background: {
      light: 'rgba(255, 255, 255, 0.6)',
      main: '#fff',
      dark: '#fdf7f2',
    },
    accent: {
      light: 'rgba(245, 146, 86, 0.5)',
      main: '#f59256',
      dark: '#ff6101',
    },
    text: {
      primary: '#111',
      secondary: '#181C27',
      searchPlaceholder: '#535353',
      white: '#fff',
      black: '#000',
    },
    blueLink: {
      main: '#3091eb',
    },
    semiTransparentBlack: {
      main: 'rgba(17, 17, 17, 0.6)',
      dark: 'rgba(27, 27, 27, 0.6)',
    },
  },
  breakpoints: {
    values: {
      mobile: 0,
      mobileMid: 480,
      tablet: 768,
      desktop: 1280,
    },
  },
});

appTheme.shadows[50] = '7px 4px 14px rgba(49, 21, 4, 0.07)';
appTheme.shadows[51] = '7px 4px 14px rgba(0, 0, 0, 0.11)';
