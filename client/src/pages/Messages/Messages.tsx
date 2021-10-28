import useStyles from './useStyles';
import AuthMenu from '../../components/AuthMenu/AuthMenu';
import Grid from '@material-ui/core/Grid';
import ChatSideBanner from '../../components/ChatSideBanner/ChatSideBanner';
import { useAuth } from '../../context/useAuthContext';
import { useSocket } from '../../context/useSocketContext';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function Messages(): JSX.Element {
  const classes = useStyles();

  const { loggedInUser } = useAuth();
  const { initSocket } = useSocket();

  const history = useHistory();

  useEffect(() => {
    initSocket();
  }, [initSocket]);

  if (loggedInUser === undefined) return <CircularProgress />;
  if (!loggedInUser) {
    history.push('/login');
    // loading for a split seconds until history.push works
    return <CircularProgress />;
  }
  return (
    <Grid container component="main">
      <AuthMenu />
      <h1>Messages</h1>;
      <ChatSideBanner loggedInUser={loggedInUser} />
    </Grid>
  );
}
