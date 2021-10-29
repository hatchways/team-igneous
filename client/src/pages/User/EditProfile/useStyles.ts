import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: '8rem 10rem 2rem 5rem',
  },
  sideBar: {
    flexDirection: 'column',
    color: 'grey',
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: -1,
    overflow: 'hidden',
  },
  innerContentContainer: {
    display: 'flex',
  },
  link: {
    textDecoration: 'none',
    fontSize: '1rem',
    fontFamily: '"Open Sans", "sans-serif", "Roboto"',
    fontWeight: 700,
    color: 'grey',
    '&:first-child': {
      marginTop: '2rem',
    },
    '&:not(:last-child)': {
      marginBottom: '2rem',
    },
    '&:hover': {
      color: 'black',
    },
  },
  activeLink: {
    color: 'black',
  },
  titleContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'black',
    margin: '2rem',
  },
  textFieldBox: {
    marginBottom: '1rem',
    display: 'flex',
    flexWrap: 'nowrap',
    justifyContent: 'flex-end',
  },
  textFieldTitle: {
    textTransform: 'uppercase',
    minWidth: '30%',
    paddingRight: '1rem',
    marginTop: '1.3rem',
    display: 'flex',
    justifyContent: 'flex-end',
    overflow: 'hidden',
  },
  textField: {
    minWidth: '80%',
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
