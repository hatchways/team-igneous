import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  navBar: {
    width: '100%',
    height: '75px',
    position: 'relative',
    boxShadow: '0px 15px 10px -15px #111',
  },
  logo: {
    position: 'absolute',
    left: '25px',
    top: '15px',
  },
  navLink: {
    textDecoration: 'none',
    marginBottom: '2rem',
    fontSize: '18px',
    fontFamily: theme.typography.fontFamily,
    fontWeight: 700,
    color: 'black!important',
    position: 'absolute',
    right: '180px',
    top: '23px',

    '&:hover': {
      color: theme.palette.text.primary,

      '&:visited': {
        color: theme.palette.text.primary,
      },
    },

    '&:visited': {
      color: 'grey',
    },
  },
  navAvatar: {
    position: 'absolute',
    top: '7px',
    right: '40px',
    height: '20px',
    '&.MuiAvatar-root': {
      minHeight: '50px',
      minWidth: '50px',
    },
  },
  notification: {
    '& .MuiBadge-badge': {
      height: '11px',
      minWidth: '10px',
    },
  },
}));

export default useStyles;
