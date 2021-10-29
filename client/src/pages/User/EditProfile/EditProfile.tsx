import useStyles from './useStyles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import { Typography } from '@material-ui/core';
import Select from '@material-ui/core/Select';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

export default function EditProfile(): JSX.Element {
  const classes = useStyles();
  const [title, setTitle] = useState('Edit Profile');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const [year, setYear] = useState('');
  const [gender, setGender] = useState('');

  return (
    <Grid container component="main" className={classes.root}>
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
      <Grid item xs={8} sm={8} md={8} lg={8} xl={8} container component={Paper} className={classes.content}>
        <Grid
          item
          xs={7}
          sm={7}
          md={7}
          lg={7}
          xl={7}
          container
          direction="column"
          className={classes.innerContentContainer}
        >
          <Grid item container className={classes.titleContainer}>
            <Typography className={classes.title} variant="h1">
              {title}
            </Typography>
          </Grid>
          <Grid item container className={classes.textFieldBox}>
            <Typography className={classes.textFieldTitle} variant="h3">
              first name
            </Typography>
            <TextField variant="outlined" className={classes.textField} placeholder="John" />
          </Grid>
          <Grid item container className={classes.textFieldBox}>
            <Typography className={classes.textFieldTitle} variant="h3">
              last name
            </Typography>
            <TextField variant="outlined" className={classes.textField} placeholder="Doe" />
          </Grid>
          <Grid item container className={classes.textFieldBox}>
            <Typography className={classes.textFieldTitle} variant="h3">
              gender
            </Typography>
            <Grid item container className={classes.dropDownGenderContainer}>
              <FormControl className={classes.dropDownGender}>
                <Select
                  variant="outlined"
                  label="Gender"
                  value={gender}
                  onChange={(event) => setGender(`${event.target.value}`)}
                ></Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid item container className={classes.textFieldBox}>
            <Typography className={classes.textFieldTitle} variant="h3">
              birth date
            </Typography>
            <Grid item container className={classes.dropDownDateContainer}>
              <FormControl className={classes.dropDownMonth}>
                <Select
                  variant="outlined"
                  label="Month"
                  value={month}
                  onChange={(event) => setMonth(`${event.target.value}`)}
                ></Select>
              </FormControl>
              <FormControl className={classes.dropDownDay}>
                <Select
                  variant="outlined"
                  label="Day"
                  value={day}
                  onChange={(event) => setDay(`${event.target.value}`)}
                ></Select>
              </FormControl>
              <FormControl className={classes.dropDownYear}>
                <Select
                  variant="outlined"
                  label="Year"
                  value={year}
                  onChange={(event) => setYear(`${event.target.value}`)}
                ></Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid item container className={classes.textFieldBox}>
            <Typography className={classes.textFieldTitle} variant="h3">
              email address
            </Typography>
            <TextField variant="outlined" className={classes.textField} placeholder="user@gmail.com" />
          </Grid>
          <Grid item container className={classes.textFieldBox}>
            <Typography className={classes.textFieldPhoneTitle} variant="h3">
              phone number
            </Typography>
            <Box className={classes.phoneNumberWarningBox}>
              <Grid item className={classes.phoneNumberWarning}>
                {!phoneNumber && 'no phone number entered'}
              </Grid>
            </Box>
            <TextField
              variant="outlined"
              focused
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
              value={phoneNumber}
              color={phoneNumber ? 'primary' : 'secondary'}
              placeholder="Add a phone number"
              className={classes.textFieldPhoneNumber}
            />
          </Grid>
          <Grid item container className={classes.textFieldBox}>
            <Typography className={classes.textFieldTitle} variant="h3">
              where you live
            </Typography>
            <TextField variant="outlined" className={classes.textField} placeholder="Address" />
          </Grid>
          <Grid item container className={classes.textFieldBox}>
            <Typography className={classes.textFieldTitle} variant="h3">
              describe yourself
            </Typography>
            <TextField variant="outlined" multiline rows={6} className={classes.textField} placeholder="About you" />
          </Grid>
          <Grid item container className={classes.saveButtonBox}>
            <Button className={classes.saveButton}>SAVE</Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
