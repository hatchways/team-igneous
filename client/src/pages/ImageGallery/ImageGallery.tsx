import useStyles from './useStyles';
import AuthMenu from '../../components/AuthMenu/AuthMenu';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

export default function ImageGallery(): JSX.Element {
  const classes = useStyles();
  return (
    <Grid container component="main">
      <AuthMenu />
      <Typography component="h1">Image Gallery</Typography>
    </Grid>
  );
}
