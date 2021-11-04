import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  sideBar: {
    // position: 'relative',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    color: 'grey',
    minHeight: '100%',
    background: 'transparent',
    border: 'hidden',
    boxShadow: 'none',
  },
  link: {
    display: 'flex',
    width: '50%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    textDecoration: 'none',
    marginTop: '2rem',
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
}));

export default useStyles;
