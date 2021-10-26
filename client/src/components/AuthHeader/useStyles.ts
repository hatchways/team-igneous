import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  authHeader: {
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
  },
  accAside: {
    fontSize: 14,
    color: 'black',
    fontFamily: 'sans-serif',
    fontWeight: 400,
    textAlign: 'center',
    whiteSpace: 'nowrap',
    display: 'flex',
    alignItems: 'center',
  },
  link: {
    color: '#ED3F3F',
    marginLeft: '2px',
  },
  accBtn: {
    width: 170,
    height: 54,
    borderRadius: theme.shape.borderRadius,
    filter: 'drop-shadow(0px 2px 6px rgba(74,106,149,0.2))',
    backgroundColor: '#ffffff',
    color: '#ED3F3F',
    boxShadow: 'none',
    marginRight: 35,
  },
}));

export default useStyles;
