import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  authHeader: {
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
    alignItems: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
  },
  accAside: {
    fontSize: 14,
    color: '#b0b0b0',
    fontWeight: 400,
    textAlign: 'center',
    marginRight: 35,
    whiteSpace: 'nowrap',
    display: 'flex',
    alignItems: 'center',
    padding: '1rem 0',
  },
  link: { textDecoration: 'none' },
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
