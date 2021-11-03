import useStyles from './useStyles';
import AuthMenu from '../../components/AuthMenu/AuthMenu';
import Grid from '@material-ui/core/Grid';
import SideNav from '../../components/SideNav/SideNav';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

export default function ProfilePicture(): JSX.Element {
  const classes = useStyles();
  return (
    <Grid container component="main">
      <AuthMenu />
      <Grid item xs={8} sm={8} md={8} lg={8} xl={8} container className={classes.content && classes.root}>
        <SideNav />
        <Grid
          item
          xs={7}
          sm={7}
          md={7}
          lg={7}
          xl={7}
          container
          direction="column"
          component={Paper}
          className={classes.innerContentContainer}
        >
          <Grid item container className={classes.titleContainer}>
            <Typography className={classes.title} variant="h1">
              Profile Picture
            </Typography>
          </Grid>
          <Grid item container className={classes.profileImageContainer}>
            <img src="" className={classes.profileImage}></img>
          </Grid>
          <Grid item container className={classes.tipContainer}>
            <Typography variant="h6" className={classes.tip}>
              Be sure to use a photo that<br></br>clearly shows your face
            </Typography>
          </Grid>
          <Grid item container className={classes.uploadButtonContainer}></Grid>
          <Button className={classes.uploadButton}>Upload a file from your device</Button>
          <Grid item container className={classes.deleteButtonContainer}></Grid>
          <Button className={classes.deleteButton}>delete photo</Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
