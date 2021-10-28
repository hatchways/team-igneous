import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: '10rem',
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
    display: 'flex-wrap',
    alignItems: 'center',
    alignContent: 'flex-start',
    flexDirection: 'row',
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
  textFieldBox: {
    marginBottom: '1rem',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  textFieldBoxItems: {
    display: 'flex',
    alignItems: 'center',
    marginRight: '30rem',
  },
  textFieldTitle: {
    textTransform: 'uppercase',
  },
  saveButton: {
    backgroundColor: 'red',
    color: 'white',
    marginBottom: '1rem',
    width: '10rem',
    height: '2.5rem',
    fontSize: '1rem',
    fontWeight: 700,
    fontFamily: '"sans-serif"',
  },
  saveButtonBox: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

export default useStyles;
