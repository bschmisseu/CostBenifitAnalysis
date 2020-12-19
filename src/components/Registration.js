import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { emphasize, fade, darken, lighten } from '@material-ui/core/styles/colorManipulator';

import clsx from 'clsx';
import service from './../service/UserService';
import { useHistory } from 'react-router-dom';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import User from './../models/User';
import entryService from './../service/EntryService';


const useStyles = makeStyles((theme) => ({
  section: {
    position: "absolute",
    top: "55%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  }
}
));

export default function Component(props) {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsermame] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');

  const onChangeFirstName = (event) => {
    setFirstName(event.target.value);
  }
  const onChangeLastName = (event) => {
    setLastName(event.target.value);
  }
  const onChangeUsername = (event) => {
    setUsermame(event.target.value);
  }
  const onChangePassword = (event) => {
    setPassword(event.target.value);
  }
  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  }
  const onChangeCompany = (event) => {
    setCompany(event.target.value);
  }

  let history = useHistory();

  const handleSubmit = async (event) => {

    let json = JSON.stringify({
      "firstName": firstName,
      "lastName": lastName,
      "userCredentials": {
        "username": username,
        "password": password,
      },
      "email": email,
      "company": company
    });

    let status = await service.registerUser(json);
    event.preventDefault();

    if (status != "") {
      history.push("/input");

      User._id = status["_id"];
      User.firstName  = status["firstName"];

      json = JSON.stringify({
        "_userId": User._id
      });

      let entries = await entryService.getUserEntries(json);
      event.preventDefault();

      User.entries = entries;
    }
    else {
      alert("There was a problem processing your request. Please try again later.");
    }
  }

  const classes = useStyles();

  return (
    <section className={classes.section}>
      <Container maxWidth="xs">
        <Box pt={8} pb={10}>
          <Box mb={3} textAlign="center">
            <Typography variant="h5" component="h2">Create a new account</Typography>
          </Box>
          <Box>

            <ValidatorForm onSubmit={handleSubmit} onError={errors => console.log(errors)}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextValidator variant="outlined" fullWidth
                    label="First Name *"
                    onChange={onChangeFirstName}
                    name="firstName"
                    value={firstName}
                    validators={['required', 'matchRegexp:^[a-zA-Z]+$', 'matchRegexp:^.{0,15}$']}
                    errorMessages={['This field is required', 'Can only contain letters', 'Must be 2 to 15 characters']}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextValidator variant="outlined" fullWidth
                    label="Last Name *"
                    onChange={onChangeLastName}
                    name="lastName"
                    value={lastName}
                    validators={['required', 'matchRegexp:^[a-zA-Z]+$', 'matchRegexp:^.{0,15}$']}
                    errorMessages={['This field is required', 'Can only contain letters', 'Must be 2 to 15 characters']}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextValidator variant="outlined" fullWidth
                    label="Username *"
                    onChange={onChangeUsername}
                    name="username"
                    value={username}
                    validators={['required', 'matchRegexp:^[a-zA-Z0-9]+$', 'matchRegexp:^.{8,32}$']}
                    errorMessages={['This field is required', 'Can only contain letters and numbers', 'Must be 8 to 32 characters']}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextValidator variant="outlined" fullWidth type="password"
                    label="Password *"
                    onChange={onChangePassword}
                    name="password"
                    value={password}
                    validators={['required', 'matchRegexp:^.{8,32}$', 'matchRegexp:^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|).{8,32}$']}
                    errorMessages={['This field is required', 'Must be 8 to 32 characters', 'Minimum of one uppercase, lowercase, number, and symbol']}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextValidator variant="outlined" fullWidth
                    label="Email *"
                    onChange={onChangeEmail}
                    name="email"
                    value={email}
                    validators={['required', 'isEmail']}
                    errorMessages={['This field is required', 'Invalid email']}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextValidator variant="outlined" fullWidth
                    label="Company *"
                    onChange={onChangeCompany}
                    name="company"
                    value={company}
                    validators={['required']}
                    errorMessages={['This field is required']}
                  />
                </Grid>
              </Grid>
              <Box my={2}>
                <Button type="submit" fullWidth variant="contained" color="primary">Sign up</Button>
              </Box>
              <Box textAlign="center">
                <Link to="/login" variant="body2" style={{ textDecoration: 'none' }}>Already have an account? Sign in</Link>
              </Box>
            </ValidatorForm>
          </Box>
        </Box>
      </Container>
    </section>
  );
}