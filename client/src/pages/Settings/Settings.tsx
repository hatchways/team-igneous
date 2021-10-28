import useStyles from './useStyles';
import AuthMenu from '../../components/AuthMenu/AuthMenu';
import Grid from '@material-ui/core/Grid';
import SideNav from '../../components/SideNav/SideNav';

export default function Settings(): JSX.Element {
  const classes = useStyles();
  return (
    <Grid container component="main">
      <AuthMenu />
      <SideNav />
      <h1>Settings</h1>;
    </Grid>
  );
}
