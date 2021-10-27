import useStyles from './useStyles';
import Grid from '@material-ui/core/Grid';

export default function EditProfile(): JSX.Element {
  const classes = useStyles();

  return (
    <Grid container component="main" className={`${classes.root} ${classes.editProfile}`}>
      TEST
    </Grid>
  );
}
