import useStyles from './useStyles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import SideNav from '../../../components/SideNav/SideNav';
import AuthMenu from '../../../components/AuthMenu/AuthMenu';
import { useEffect, useState } from 'react';
import { User } from '../../../interface/User';
import { FetchOptions } from '../../../interface/FetchOptions';

interface Props {
  loggedInUser: User;
}

export default function EditProfile({ loggedInUser }: Props): JSX.Element {
  const classes = useStyles();
  const profile = loggedInUser.profile;
  const [profileData, setProfileData] = useState();
  const getProfile = async (profile: string) => {
    const fetchOptions: FetchOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    };
    await fetch(`/profile/${profile}`, fetchOptions)
      .then((res) => res.json())
      .then((data) => setProfileData(data.success.profile))
      .catch(() => ({
        error: { message: 'Unable to connect to server. Please try again' },
      }));
  };
  useEffect(() => {
    if (profile) {
      getProfile(profile);
    }
  }, [profile]);

  return (
    <Grid container component="main" className={`${classes.root}`}>
      <AuthMenu />
      <SideNav />
      <Grid item xs={7} sm={8} md={9} component={Paper} className={classes.content}>
        <Typography className={classes.title} component="h1">
          Edit Profile
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
