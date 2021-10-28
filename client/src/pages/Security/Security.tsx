import useStyles from './useStyles';
import AuthMenu from '../../components/AuthMenu/AuthMenu';
import Grid from '@material-ui/core/Grid';
import SideNav from '../../components/SideNav/SideNav';
import Typography from '@material-ui/core/Typography';

export default function Security(): JSX.Element {
  const classes = useStyles();
  return (
    <Grid container component="main">
      <AuthMenu />
      <SideNav />
      <Typography component="h1">Security</Typography>
    </Grid>
  );
}
