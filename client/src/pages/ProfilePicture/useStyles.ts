import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  outsideContainer: {
    width: '100%',
    height: 'inherit',
  },
  navBarContainer: {
    position: 'absolute',
    top: '0',
    left: '0',
  },
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: '8rem 10rem 2rem 5rem',
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
    flexWrap: 'nowrap',
    paddingBottom: '2rem',
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
  profileImageContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    Height: '40%',
    paddingBottom: '2rem',
    border: 'none',
  },
  profileImage: {
    position: 'relative',
    display: 'flex',
    height: '10rem',
    width: '10rem',
    border: '0.15rem solid',
    borderRadius: '50%',
  },
  tipContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: '2rem',
  },
  tip: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  uploadButtonContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    paddingBottom: '2rem',
  },
  uploadButton: {
    border: '0.15rem solid',
    borderColor: 'red',
    color: 'red',
    fontWeight: 700,
    fontSize: '1rem',
    fontFamily: 'sans-serif',
    height: '4rem',
    width: '30%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  deleteButtonContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: '2rem',
  },
  deleteButtonIcon: {
    color: 'black',
    marginRight: '1rem',
  },
  deleteButton: {
    fontWeight: 700,
    fontSize: '1rem',
    fontFamily: 'sans-serif',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
}));

export default useStyles;
