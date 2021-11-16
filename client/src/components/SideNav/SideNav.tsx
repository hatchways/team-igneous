import Grid from '@material-ui/core/Grid';
import useStyles from './useStyles';
import Paper from '@material-ui/core/Paper';
import { NavLink } from 'react-router-dom';

export default function SideNav(): JSX.Element {
  const classes = useStyles();
  return (
    <Paper className={classes.sideBar}>
      <NavLink exact to="/user/edit-profile" className={classes.link} activeClassName={classes.activeLink}>
        Edit Profile
      </NavLink>
      <NavLink exact to="/user/profile-photo" className={classes.link} activeClassName={classes.activeLink}>
        Profile Photo
      </NavLink>
      <NavLink exact to="/user/image-gallery" className={classes.link} activeClassName={classes.activeLink}>
        Image Gallery
      </NavLink>
      <NavLink exact to="/user/payment" className={classes.link} activeClassName={classes.activeLink}>
        Payment
      </NavLink>
      <NavLink exact to="/user/security" className={classes.link} activeClassName={classes.activeLink}>
        Security
      </NavLink>
      <NavLink exact to="/user/settings" className={classes.link} activeClassName={classes.activeLink}>
        Settings
      </NavLink>
    </Paper>
  );
}
