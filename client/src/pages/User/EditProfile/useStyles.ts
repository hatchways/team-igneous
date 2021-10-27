import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: '10%',
  },
  sideBar: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    color: 'grey',
    minHeight: '100%',
    background: 'transparent',
    border: 'hidden',
    boxShadow: 'none',
  },
  content: {
    color: 'black',
    minHeight: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  link: {
    textDecoration: 'none',
    marginBottom: '2rem',
    fontSize: '1rem',
    fontFamily: '"Open Sans", "sans-serif", "Roboto"',
    fontWeight: 700,
    color: 'grey',

    '&:hover': {
      color: 'black',

      '&:visited': {
        color: 'black',
      },
    },

    '&:visited': {
      color: 'grey',
    },
  },
  title: {
    color: 'black',
    fontWeight: 700,
    fontSize: '2rem',
    fontFamily: '"sans-serif"',
    margin: '2rem',
    display: 'flex',
    justifyContent: 'center',
  },
  textField: {
    marginBottom: '1rem',
  },

  textFieldTitle: {
    fontSize: '1rem',
    fontWeight: 700,
    fontFamily: '"sans-serif"',
  },
}));

export default useStyles;
