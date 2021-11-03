import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
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
  profileImageContainer: {},
  profileImage: {},
  tipContainer: {},
  tip: {},
  uploadButtonContainer: {},
  uploadButton: {},
  deleteButtonContainer: {},
  deleteButton: {},
}));

export default useStyles;
