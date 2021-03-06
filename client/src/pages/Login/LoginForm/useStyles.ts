import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
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
  forgot: {
    paddingRight: 10,
    color: theme.palette.primary.main,
  },
  submit: {
    margin: theme.spacing(3, 2, 2),
    padding: 10,
    width: 160,
    height: 56,
    borderRadius: theme.palette.primary.main,
    marginTop: 49,
    fontSize: 16,
    backgroundColor: theme.palette.primary.main,
    fontWeight: 'bold',
  },
  circle: {
    color: 'white',
  },
}));

export default useStyles;
