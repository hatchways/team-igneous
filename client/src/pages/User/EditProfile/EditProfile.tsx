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
import { Formik, FormikHelpers, Field } from 'formik';
import * as Yup from 'yup';
import { CircularProgress } from '@material-ui/core';

interface Props {
  loggedInUser: User;
}

export default function EditProfile({ loggedInUser }: Props): JSX.Element {
  console.log(loggedInUser);
  const profile = loggedInUser.profile;
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const [profileData, setProfileData] = useState({
    id: ' ',
    firstName: ' ',
    lastName: ' ',
    gender: ' ',
    email: ' ',
    phoneNumber: ' ',
    address: ' ',
    description: ' ',
  });
  const getProfile = async (profile: string) => {
    const fetchOptions: FetchOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    };
    await fetch(`/profile/${profile}`, fetchOptions)
      .then((res) => res.json())
      .then((data) => {
        const temp = data.success.profile;
        setProfileData({
          id: temp.id,
          firstName: temp.firstName,
          lastName: temp.lastName,
          gender: temp.gender,
          email: temp.email,
          phoneNumber: temp.phoneNumber,
          address: temp.address,
          description: temp.description,
        });
        setLoading(false);
      })
      .catch(() => ({
        error: { message: 'Unable to connect to server. Please try again' },
      }));
  };
  useEffect(() => {
    if (profile) {
      (async () => {
        await getProfile(profile);
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleSubmit = async (
    {
      id,
      firstName,
      lastName,
      gender,
      email,
      phoneNumber,
      address,
      description,
    }: {
      id: string;
      firstName: string;
      lastName: string;
      gender: string;
      email: string;
      phoneNumber: string;
      address: string;
      description: string;
    },
    {
      setSubmitting,
    }: FormikHelpers<{
      id: string;
      firstName: string;
      lastName: string;
      gender: string;
      email: string;
      phoneNumber: string;
      address: string;
      description: string;
    }>,
  ) => {
    const fetchOptions: FetchOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, firstName, lastName, gender, email, phoneNumber, address, description }),
      credentials: 'include',
    };
    return await fetch(`/profile/${profile}/update`, fetchOptions)
      .then((res) => res.json())
      .then(() => setSubmitting(false))
      .catch(() => ({
        error: { message: 'Unable to connect to server. Please try again' },
      }));
  };

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  return (
    <Grid container component="main" className={`${classes.root}`}>
      <AuthMenu />
      <SideNav />
      <Paper className={classes.content}>
        <Typography className={classes.title} component="h1">
          Edit Profile
        </Typography>
        {!loading && (
          <Formik
            enableReinitialize={true}
            initialValues={{
              id: profileData.id,
              firstName: profileData.firstName,
              lastName: profileData.lastName,
              gender: profileData.gender,
              email: profileData.email,
              phoneNumber: profileData.phoneNumber,
              address: profileData.address,
              description: profileData.description,
            }}
            validator={() => ({})}
            validationSchema={Yup.object().shape({
              firstName: Yup.string().required('First name is required').max(40, 'First name is too long'),
              lastName: Yup.string().required('Lase name is required').max(40, 'Last name is too long'),
              gender: Yup.string().required('Gender is required').max(40, 'Gender is too long'),
              email: Yup.string().required('Email is required').email('Email is not valid'),
              phoneNumber: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
              address: Yup.string().required('Address is required').max(40, 'Address is too long'),
              description: Yup.string().required('Description is required').max(240, 'Description is too long'),
            })}
            onSubmit={handleSubmit}
          >
            {({ handleSubmit, handleChange, values, touched, errors, isSubmitting }) => (
              <form onSubmit={handleSubmit} noValidate className={classes.form}>
                <TextField
                  id="firstName"
                  label={
                    <Typography className={classes.label} variant="h3">
                      first name
                    </Typography>
                  }
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  InputProps={{
                    classes: { input: classes.inputs },
                    disableUnderline: true,
                  }}
                  name="firstName"
                  error={touched.firstName && Boolean(errors.firstName)}
                  helperText={touched.firstName && errors.firstName}
                  value={values.firstName || ''}
                  placeholder="John"
                  onChange={handleChange}
                />
                <TextField
                  id="lastName"
                  label={
                    <Typography className={classes.label} variant="h3">
                      last name
                    </Typography>
                  }
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  InputProps={{
                    classes: { input: classes.inputs },
                    disableUnderline: true,
                  }}
                  name="lastName"
                  autoFocus
                  error={touched.lastName && Boolean(errors.lastName)}
                  helperText={touched.lastName && errors.lastName}
                  value={values.lastName || ''}
                  placeholder="Doe"
                  onChange={handleChange}
                />
                <TextField
                  id="gender"
                  select
                  label={
                    <Typography className={classes.label} variant="h3">
                      gender
                    </Typography>
                  }
                  name="gender"
                  value={values.gender}
                  onChange={handleChange}
                >
                  <option className={classes.label} value="Male">
                    Male
                  </option>
                  <option className={classes.label} value="Female">
                    Female
                  </option>
                  <option className={classes.label} value="Other">
                    Other
                  </option>
                  <option className={classes.label} value="prefer not to say">
                    Prefer not to say
                  </option>
                </TextField>
                <TextField
                  id="email"
                  label={
                    <Typography className={classes.label} variant="h3">
                      email
                    </Typography>
                  }
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  InputProps={{
                    classes: { input: classes.inputs },
                    disableUnderline: true,
                  }}
                  name="email"
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                  value={values.email || ''}
                  placeholder="johndoe@gmail.com"
                  onChange={handleChange}
                />
                <TextField
                  id="phoneNumber"
                  label={
                    <Typography className={classes.label} variant="h3">
                      phone number
                    </Typography>
                  }
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  InputProps={{
                    classes: { input: classes.inputs },
                    disableUnderline: true,
                  }}
                  name="phoneNumber"
                  error={touched.phoneNumber && Boolean(errors.phoneNumber)}
                  helperText={touched.phoneNumber && errors.phoneNumber}
                  value={values.phoneNumber || ''}
                  placeholder="xxx-xxxx"
                  onChange={handleChange}
                />
                <TextField
                  id="address"
                  label={
                    <Typography className={classes.label} variant="h3">
                      address
                    </Typography>
                  }
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  InputProps={{
                    classes: { input: classes.inputs },
                    disableUnderline: true,
                  }}
                  name="address"
                  error={touched.address && Boolean(errors.address)}
                  helperText={touched.address && errors.address}
                  value={values.address || ''}
                  placeholder="123 Fake St"
                  onChange={handleChange}
                />
                <TextField
                  id="description"
                  label={
                    <Typography className={classes.label} variant="h3">
                      description
                    </Typography>
                  }
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  InputProps={{
                    classes: { input: classes.inputs },
                    disableUnderline: true,
                  }}
                  name="description"
                  error={touched.description && Boolean(errors.description)}
                  helperText={touched.description && errors.description}
                  value={values.description || ''}
                  placeholder="tell us about yourself"
                  onChange={handleChange}
                />
                <Box textAlign="center">
                  <Button type="submit" size="large" variant="contained" color="primary" className={classes.saveButton}>
                    {isSubmitting ? <CircularProgress className={classes.circle} /> : 'save'}
                  </Button>
                </Box>
              </form>
            )}
          </Formik>
        )}
      </Paper>
    </Grid>
  );
}
