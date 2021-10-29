import { createMuiTheme } from '@material-ui/core';

export const theme = createMuiTheme({
  typography: {
    fontFamily: '"Open Sans", "sans-serif", "Roboto"',
    fontSize: 12,
    button: {
      textTransform: 'none',
      fontWeight: 700,
    },
    h3: {
      fontSize: '1rem',
      fontWeight: 700,
      fontFamily: '"sans-serif"',
    },
  },
  palette: {
    primary: { main: '#ED3F3F' },
    text: { primary: '#000000' },
  },
  shape: {
    borderRadius: 5,
  },
});
