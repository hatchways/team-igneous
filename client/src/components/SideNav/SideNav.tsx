import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import useStyles from './useStyles';
import Paper from '@material-ui/core/Paper';

export default function SideNav(): JSX.Element {
  const classes = useStyles();
  return (
    <Grid item xs={2} sm={2} md={2} lg={2} xl={2} container component={Paper} className={classes.sideBar}>
      <Link to="/user/edit-profile" className={classes.link}>
        Edit Profile
      </Link>
      <Link to="/user/profile-photo" className={classes.link}>
        Profile Photo
      </Link>
      <Link to="/user/image-gallery" className={classes.link}>
        Image Gallery
      </Link>
      <Link to="/user/payment" className={classes.link}>
        Payment
      </Link>
      <Link to="/user/security" className={classes.link}>
        Security
      </Link>
      <Link to="/user/settings" className={classes.link}>
        Settings
      </Link>
    </Grid>
  );
}
