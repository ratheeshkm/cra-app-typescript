// External components
import React from 'react';
import { Formik, Field } from 'formik';
import { Link as RouterLink } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { Box, Button, Container, Link, Typography } from '@material-ui/core';
import { TextField } from 'formik-material-ui';

// Components
import { login } from 'src/pages/Login/slice';

const Login = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const dispatch = useDispatch();

  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'center',
        }}
      >
        <Container maxWidth="sm">
          <Formik
            initialValues={initialValues}
            validationSchema={Yup.object().shape({
              email: Yup.string()
                .email('Must be a valid email')
                .max(255)
                .required('Email is required'),
              password: Yup.string().max(255).required('Password is required'),
            })}
            onSubmit={() => {
              dispatch(login());
            }}
          >
            {({ handleSubmit, isSubmitting }) => (
              <form onSubmit={handleSubmit}>
                <Box sx={{ mb: 3 }}>
                  <Typography color="textPrimary" variant="h2">
                    Sign in
                  </Typography>
                </Box>

                <Field
                  component={TextField}
                  name="email"
                  type="email"
                  label="Email"
                />
                {/* <TextField
                  error={Boolean(touched.email && errors.email)}
                  fullWidth
                  helperText={touched.email && errors.email}
                  label="Email Address"
                  margin="normal"
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="email"
                  value={values.email}
                  variant="outlined"
                /> */}
                <Field
                  component={TextField}
                  name="password"
                  type="password"
                  label="Password"
                />
                {/* <TextField
                  error={Boolean(touched.password && errors.password)}
                  fullWidth
                  helperText={touched.password && errors.password}
                  label="Password"
                  margin="normal"
                  name="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="password"
                  value={values.password}
                  variant="outlined"
                /> */}

                <Box sx={{ py: 2 }}>
                  <Button
                    color="secondary"
                    disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                    sx={{
                      backgroundColor: '#0d62ff',
                    }}
                  >
                    Sign in now
                  </Button>
                </Box>

                <Typography color="textSecondary" variant="body1">
                  Don&apos;t have an account?{' '}
                  <Link component={RouterLink} to="/register" variant="h6">
                    Sign up
                  </Link>
                </Typography>
              </form>
            )}
          </Formik>
        </Container>
      </Box>
    </>
  );
};

export default Login;
