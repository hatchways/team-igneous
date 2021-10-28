import useStyles from './useStyles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function EditProfile(): JSX.Element {
  const classes = useStyles();
  const [title, setTitle] = useState('Edit Profile');

  return (
    <Grid container component="main" className={`${classes.root}`}>
      <Grid item xs={5} sm={4} md={3} component={Paper} className={classes.sideBar}>
        <Link
          to="/user/edit-profile"
          className={classes.link}
          onClick={() => {
            setTitle('Edit Profile');
          }}
        >
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
      <Grid item xs={7} sm={8} md={9} component={Paper} className={classes.content}>
        <Typography className={classes.title} component="h1">
          {title}
        </Typography>
        <Box className={classes.textFieldBox}>
          <Box className={classes.textFieldBoxItems}>
            <Typography className={classes.textFieldTitle} component="h3">
              first name
            </Typography>
            <TextField label="First Name" variant="outlined" focused />
          </Box>
        </Box>
        <Box className={classes.textFieldBox}>
          <Box className={classes.textFieldBoxItems}>
            <Typography className={classes.textFieldTitle} component="h3">
              last name
            </Typography>
            <TextField label="Last Name" variant="outlined" focused />
          </Box>
        </Box>
        <Box className={classes.textFieldBox}>
          <Box className={classes.textFieldBoxItems}>
            <Typography className={classes.textFieldTitle} component="h3">
              email address
            </Typography>
            <TextField label="Email Address" variant="outlined" focused placeholder="user@gmail.com" />
          </Box>
        </Box>
        <Box className={classes.textFieldBox}>
          <Box className={classes.textFieldBoxItems}>
            <Typography className={classes.textFieldTitle} component="h3">
              city
            </Typography>
            <TextField label="City" variant="outlined" focused />
          </Box>
        </Box>
        <Box className={classes.textFieldBox}>
          <Box className={classes.textFieldBoxItems}>
            <Typography className={classes.textFieldTitle} component="h3">
              phone number
            </Typography>
            <TextField label="Phone Number" variant="outlined" focused placeholder="Phone Number" />
          </Box>
        </Box>
        <Box className={classes.textFieldBox}>
          <Box className={classes.textFieldBoxItems}>
            <Typography className={classes.textFieldTitle} component="h3">
              where you live
            </Typography>
            <TextField label="Address" variant="outlined" focused placeholder="Address" />
          </Box>
        </Box>
        <Box className={classes.textFieldBox}>
          <Box className={classes.textFieldBoxItems}>
            <Typography className={classes.textFieldTitle} component="h3">
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
