import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: '10%',
  },
  content: {
    color: 'black',
    minHeight: '100%',
    display: 'flex-wrap',
    alignItems: 'center',
    alignContent: 'flex-start',
    flexDirection: 'row',
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
    marginRight: '40%',
  },
  textFieldTitle: {
    fontSize: '1rem',
    fontWeight: 700,
    fontFamily: '"sans-serif"',
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
