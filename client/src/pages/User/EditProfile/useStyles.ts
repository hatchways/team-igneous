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
}));

export default useStyles;
