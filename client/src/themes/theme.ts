import { createMuiTheme } from '@material-ui/core';

export const theme = createMuiTheme({
  typography: {
    fontFamily: '"Open Sans", "sans-serif", "Roboto"',
    fontSize: 12,
    button: {
      textTransform: 'none',
      fontWeight: 700,
    },
    h1: {
      fontSize: 24,
      fontWeight: 700,
      fontFamily: '"sans-serif"',
    },
    h3: {
      fontSize: 12,
      fontWeight: 700,
      fontFamily: '"sans-serif"',
    },
  },
  palette: {
    primary: { main: '#ED3F3F' },
    secondary: { main: '#5BC431' },
    text: { primary: '#000000' },
  },
  shape: {
    borderRadius: 5,
  },
});
