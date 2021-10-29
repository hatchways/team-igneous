import useStyles from './useStyles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

export default function EditProfile(): JSX.Element {
  const classes = useStyles();
  const [title, setTitle] = useState('Edit Profile');

  return (
    <Grid container component="main" className={classes.root} xs={12}>
      {/*component={Paper}*/}
      <Grid item xs={2} sm={2} md={2} lg={2} xl={2} container className={classes.sideBar} direction="column">
        <NavLink
          exact
          to="/user/edit-profile"
          className={classes.link}
          activeClassName={classes.activeLink}
          onClick={() => {
            setTitle('Edit Profile');
          }}
        >
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
      </Grid>
      <Grid item xs={7} sm={8} md={9} component={Paper} className={classes.content}>
        <Typography className={classes.title} component="h1">
          {title}
        </Typography>
        <Box className={classes.textFieldBox}>
          <Box className={classes.textFieldBoxItems}>
            <Typography className={classes.textFieldTitle} variant="h3">
              first name
            </Typography>
            <TextField label="First Name" variant="outlined" focused />
          </Box>
        </Box>
        <Box className={classes.textFieldBox}>
          <Box className={classes.textFieldBoxItems}>
            <Typography className={classes.textFieldTitle} variant="h3">
              last name
            </Typography>
            <TextField label="Last Name" variant="outlined" focused />
          </Box>
        </Box>
        <Box className={classes.textFieldBox}>
          <Box className={classes.textFieldBoxItems}>
            <Typography className={classes.textFieldTitle} variant="h3">
              email address
            </Typography>
            <TextField label="Email Address" variant="outlined" focused placeholder="user@gmail.com" />
          </Box>
        </Box>
        <Box className={classes.textFieldBox}>
          <Box className={classes.textFieldBoxItems}>
            <Typography className={classes.textFieldTitle} variant="h3">
              city
            </Typography>
            <TextField label="City" variant="outlined" focused />
          </Box>
        </Box>
        <Box className={classes.textFieldBox}>
          <Box className={classes.textFieldBoxItems}>
            <Typography className={classes.textFieldTitle} variant="h3">
              phone number
            </Typography>
            <TextField label="Phone Number" variant="outlined" focused placeholder="Phone Number" />
          </Box>
        </Box>
        <Box className={classes.textFieldBox}>
          <Box className={classes.textFieldBoxItems}>
            <Typography className={classes.textFieldTitle} variant="h3">
              where you live
            </Typography>
            <TextField label="Address" variant="outlined" focused placeholder="Address" />
          </Box>
        </Box>
        <Box className={classes.textFieldBox}>
          <Box className={classes.textFieldBoxItems}>
            <Typography className={classes.textFieldTitle} variant="h3">
              describe yourself
            </Typography>
            <TextField label="About You" variant="outlined" focused placeholder="About you" />
          </Box>
        </Box>
        <Box className={classes.saveButtonBox}>
          <Button className={classes.saveButton}>SAVE</Button>
        </Box>
      </Grid>
    </Grid>
  );
}
