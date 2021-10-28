import { useState, MouseEvent } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useAuth } from '../../context/useAuthContext';
import { useHistory } from 'react-router-dom';
import AvatarDisplay from '../AvatarDisplay/AvatarDisplay';
import { Link } from 'react-router-dom';
import useStyles from './useStyles';

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
    <div>
      <IconButton aria-label="show auth menu" aria-controls="auth-menu" aria-haspopup="true" onClick={handleClick}>
        {loggedInUser && <AvatarDisplay loggedIn user={loggedInUser} />}
      </IconButton>
      <img src="../../Images/logo.png" alt="logo" />
      <Link to="/user/messages" className={classes.link}>
        Messages
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
