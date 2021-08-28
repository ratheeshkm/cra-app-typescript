import { createTheme, colors } from '@material-ui/core';

// import shadows from './shadows';
import typography from './typography';

const theme = createTheme({
  palette: {
    background: {
      default: '#F4F6F8',
      paper: colors.common.white,
    },
    primary: {
      contrastText: '#ffffff',
      main: '#112f64',
    },
    text: {
      primary: '#172b4d',
      secondary: '#6b778c',
    },
  },
  typography,
});

export default theme;
