import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import useStyles from './useStyles';
import AuthMenu from '../../components/AuthMenu/AuthMenu';
import Grid from '@material-ui/core/Grid';
import SideNav from '../../components/SideNav/SideNav';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import DeleteIcon from '@material-ui/icons/Delete';
import uploadImage from '../../helpers/APICalls/uploadImage';

export default function ProfilePicture(): JSX.Element {
  const classes = useStyles();
  const [fileInput, setFileInput] = useState<File>();
  const [previewImage, setPreviewImage] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    const image: File = (target.files as FileList)[0];
    profileImage(image);
    setFileInput(image);
  };

  const profileImage = (image: File) => {
    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onloadend = () => {
      const result = reader.result as string;
      setPreviewImage(result);
    };
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!fileInput) return;
    await uploadImage(fileInput);
  };

  return (
    <Box className={classes.outsideContainer}>
      <AuthMenu />
      <Grid container component="main" className={classes.root}>
        <SideNav />
        <Grid item xs={8} sm={8} md={8} lg={8} xl={8} container className={classes.content}>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
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
            <Grid item container className={classes.previewImageContainer}>
              {previewImage && <img src={previewImage} className={classes.previewImage}></img>}
            </Grid>
            <Grid item container className={classes.tipContainer}>
              <Typography variant="h6" className={classes.tip}>
                <Box>Be sure to use a photo that</Box>
                <Box>clearly shows your face</Box>
              </Typography>
            </Grid>
            <Grid item container className={classes.uploadButtonContainer}>
              <form method="post" action="/imageUpload" onSubmit={handleSubmit} encType="multipart/form-data">
                <input
                  className={classes.uploadInput}
                  id="fileInput"
                  name="picture"
                  type="file"
                  onChange={handleChange}
                />
                <button type="submit">Upload a file from your device</button>
              </form>
            </Grid>
            <Grid item container className={classes.deleteButtonContainer}>
              {/*this is going to remove from the cloud*/}
              <IconButton className={classes.deleteButton}>
                <DeleteIcon className={classes.deleteButtonIcon} />
                Delete photo
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
