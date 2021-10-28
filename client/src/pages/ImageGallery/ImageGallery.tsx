import useStyles from './useStyles';
import AuthMenu from '../../components/AuthMenu/AuthMenu';
import Grid from '@material-ui/core/Grid';

export default function ImageGallery(): JSX.Element {
  const classes = useStyles();
  return (
    <Grid container component="main">
      <AuthMenu />
      <h1>Image Gallery</h1>;
    </Grid>
  );
}
