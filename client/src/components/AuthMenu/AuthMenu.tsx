import { useState, MouseEvent } from 'react';
import IconButton from '@material-ui/core/IconButton';
import { Badge } from '@material-ui/core';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useAuth } from '../../context/useAuthContext';
import { useHistory } from 'react-router-dom';
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';
import useStyles from './useStyles';
import Logo from '../../Images/logo.png';

const AuthMenu = (): JSX.Element => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { logout } = useAuth();
  const history = useHistory();
  const { loggedInUser } = useAuth();
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleClose();
    logout();
  };

  const displayProfile = () => {
    history.push('/user/edit-profile');
  };

  const classes = useStyles();

  return (
    <div className={classes.navBar}>
      <IconButton
        aria-label="show auth menu"
        aria-controls="auth-menu"
        aria-haspopup="true"
        className={classes.navAvatar}
        onClick={handleClick}
      >
        {!!loggedInUser && (
          <Avatar
            alt="Profile Image"
            className={classes.navAvatar}
            src={`https://robohash.org/${loggedInUser.email}.png`}
          />
        )}
      </IconButton>
      <img src={Logo} alt="logo" className={classes.logo} />
      <Link to="/user/messages" className={classes.navLink}>
        <Badge badgeContent={true} color="secondary" className={classes.notification}>
          Messages
        </Badge>
      </Link>
      <Menu
        id="auth-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        getContentAnchorEl={null}
      >
        <MenuItem onClick={displayProfile}>Profile</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </div>
  );
};

export default AuthMenu;
