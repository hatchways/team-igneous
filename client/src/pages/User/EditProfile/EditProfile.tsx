import useStyles from './useStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import SideNav from '../../../components/SideNav/SideNav';
import AuthMenu from '../../../components/AuthMenu/AuthMenu';

export default function EditProfile(): JSX.Element {
  const classes = useStyles();

  return (
    <Grid container component="main" className={`${classes.root}`}>
      <CssBaseline />
      <AuthMenu />
      <SideNav />
      <Grid item xs={7} sm={8} md={9} component={Paper} className={classes.content}>
        <Typography className={classes.title} component="h1">
          Edit Profile
        </Typography>
        <Box className={classes.textFieldBox}>
          <Box className={classes.textFieldBoxItems}>
            <Typography className={classes.textFieldTitle} component="h1">
              FIRST NAME
            </Typography>
            <TextField label="First Name" variant="outlined" focused />
          </Box>
        </Box>
        <Box className={classes.textFieldBox}>
          <Box className={classes.textFieldBoxItems}>
            <Typography className={classes.textFieldTitle} component="h1">
              LAST NAME
            </Typography>
            <TextField label="Last Name" variant="outlined" focused />
          </Box>
        </Box>
        <Box className={classes.textFieldBox}>
          <Box className={classes.textFieldBoxItems}>
            <Typography className={classes.textFieldTitle} component="h1">
              EMAIL ADDRESS
            </Typography>
            <TextField label="Email Address" variant="outlined" focused placeholder="user@gmail.com" />
          </Box>
        </Box>
        <Box className={classes.textFieldBox}>
          <Box className={classes.textFieldBoxItems}>
            <Typography className={classes.textFieldTitle} component="h1">
              CITY
            </Typography>
            <TextField label="City" variant="outlined" focused />
          </Box>
        </Box>
        <Box className={classes.textFieldBox}>
          <Box className={classes.textFieldBoxItems}>
            <Typography className={classes.textFieldTitle} component="h1">
              PHONE NUMBER
            </Typography>
            <TextField label="Phone Number" variant="outlined" focused placeholder="Phone Number" />
          </Box>
        </Box>
        <Box className={classes.textFieldBox}>
          <Box className={classes.textFieldBoxItems}>
            <Typography className={classes.textFieldTitle} component="h1">
              WHERE YOU LIVE
            </Typography>
            <TextField label="Address" variant="outlined" focused placeholder="Address" />
          </Box>
        </Box>
        <Box className={classes.textFieldBox}>
          <Box className={classes.textFieldBoxItems}>
            <Typography className={classes.textFieldTitle} component="h1">
              DESCRIBE YOURSELF
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
