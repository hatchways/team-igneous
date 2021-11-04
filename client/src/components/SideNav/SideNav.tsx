import Grid from '@material-ui/core/Grid';
import useStyles from './useStyles';
import Paper from '@material-ui/core/Paper';
import { NavLink } from 'react-router-dom';

export default function SideNav(): JSX.Element {
  const classes = useStyles();
  return (
    <Grid item xs={2} sm={2} md={2} lg={2} xl={2} container component={Paper} className={classes.sideBar}>
      <NavLink to="/user/edit-profile" className={classes.link}>
        Edit Profile
      </NavLink>
      <NavLink to="/user/profile-photo" className={classes.link}>
        Profile Photo
      </NavLink>
      <NavLink to="/user/image-gallery" className={classes.link}>
        Image Gallery
      </NavLink>
      <NavLink to="/user/payment" className={classes.link}>
        Payment
      </NavLink>
      <NavLink to="/user/security" className={classes.link}>
        Security
      </NavLink>
      <NavLink to="/user/settings" className={classes.link}>
        Settings
      </NavLink>
    </Grid>
  );
}
