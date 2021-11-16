import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {},
  sideBar: {
    flexDirection: 'column',
    color: 'grey',
  },
  content: {
    display: 'inline-block',
    width: '60%',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: -1,
    overflow: 'hidden',
    margin: '20px auto',
  },
  innerContentContainer: {},
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
    fontSize: 24,
    fontWeight: 700,
    fontFamily: '"sans-serif"',
    textAlign: 'center',
  },
  form: {
    width: '60%',
    margin: '20px auto',
  },
  label: {
    fontSize: 19,
    color: 'black',
    fontWeight: 'bold',
    paddingLeft: '5px',
    textTransform: 'uppercase',
  },
  inputs: {
    marginTop: '.8rem',
    height: '2rem',
    padding: '12px',
    border: '1px solid lightgrey',
    borderRadius: '5px',
  },
  textFieldBox: {
    marginBottom: '1rem',
    display: 'inline-block',
  },
  textFieldTitle: {
    textTransform: 'uppercase',
    minWidth: '30%',
    paddingRight: '1rem',
    marginTop: '1.3rem',
    display: 'inline-block',
  },
  dropDownDateContainer: {
    minWidth: '80%',
    display: 'flex-wrap',
    justifyContent: 'space-between',
  },
  dropDownGenderContainer: {
    minWidth: '80%',
    display: 'flex-start',
    justifyContent: 'flex-start',
  },
  dropDownGender: {
    minWidth: '40%',
  },
  dropDownMonth: {
    minWidth: '40%',
  },
  dropDownDay: {
    minWidth: '28%',
  },
  dropDownYear: {
    minWidth: '28%',
  },
  textField: {
    minWidth: '80%',
  },
  textFieldPhoneTitle: {
    textTransform: 'uppercase',
    maxWidth: '30%',
    paddingRight: '1rem',
    marginTop: '1.3rem',
    display: 'flex',
    justifyContent: 'flex-end',
    overflow: 'hidden',
  },
  textFieldPhoneNumber: {
    maxWidth: '40%',
    color: 'red',
    opacity: 1,
  },
  MuiInputBase: {
    color: 'red',
  },
  phoneNumberWarning: {
    color: 'black',
    fontSize: '1rem',
    fontFamily: '"Open Sans", "sans-serif", "Roboto"',
    fontWeight: 700,
    fontStyle: 'italic',
  },
  phoneNumberWarningBox: {
    marginRight: '6rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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
  circle: {
    background: 'blue',
  },
}));

export default useStyles;
