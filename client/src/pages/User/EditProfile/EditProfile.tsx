import useStyles from './useStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
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
      <CssBaseline />
      <Grid item xs={5} sm={4} md={3} elevation={6} component={Paper} square className={classes.sideBar}>
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
      <Grid item xs={7} sm={8} md={9} elevation={6} component={Paper} square className={classes.content}>
        <Typography className={classes.title} component="h1">
          {title}
        </Typography>
        <Box className={classes.textField}>
          <Typography className={classes.textFieldTitle} component="h1">
            FIRST NAME
          </Typography>
          <TextField label="Outlined" variant="outlined" focused />
        </Box>
        <Box className={classes.textField}>
          <Typography className={classes.textFieldTitle} component="h1">
            LAST NAME
          </Typography>
          <TextField label="Outlined" variant="outlined" focused />
        </Box>
        <Box className={classes.textFieldTitle}>
          <Typography className={classes.textFieldTitle} component="h1">
            EMAIL ADDRESS
          </Typography>
          <TextField label="Outlined" variant="outlined" focused />
        </Box>
        <Box className={classes.textFieldTitle}>
          <Typography className={classes.textFieldTitle} component="h1">
            CITY
          </Typography>
          <TextField label="Outlined" variant="outlined" focused />
        </Box>
        <Box className={classes.textFieldTitle}>
          <Typography className={classes.textFieldTitle} component="h1">
            PHONE NUMBER
          </Typography>
          <TextField label="Outlined" variant="outlined" focused />
        </Box>
        <Box className={classes.textFieldTitle}>
          <Typography className={classes.textFieldTitle} component="h1">
            WHERE YOU LIVE
          </Typography>
          <TextField label="Outlined" variant="outlined" focused />
        </Box>
        <Box className={classes.textFieldTitle}>
          <Typography className={classes.textFieldTitle} component="h1">
            DESCRIBE YOURSELF
          </Typography>
          <TextField label="Outlined" variant="outlined" focused />
        </Box>
        <Box>
          <Button>SAVE</Button>
        </Box>
      </Grid>
    </Grid>
  );
}
