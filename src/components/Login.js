import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import service from './../service/UserService';
import entryService from './../service/EntryService';
import User from './../models/User';


const useStyles = makeStyles((theme) => ({
  section: {
    position: "absolute",
    top: "45%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  actions: {
    alignText: "center",
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(4)
    },
  }
}
));

export default function Component(props) {

  const [username, setUsermame] = useState('');
  const [password, setPassword] = useState('');

  const onChangeUsername = (event) => {
    setUsermame(event.target.value);
  }
  const onChangePassword = (event) => {
    setPassword(event.target.value);
  }

  let history = useHistory();

  const handleSubmit = async () => {

    let json = JSON.stringify({
      "firstName": "",
      "lastName": "",
      "userCredentials": {
        "username": username,
        "password": password,
      },
      "email": "",
      "company": ""
    });

    let status = await service.loginUser(json);
    event.preventDefault();

    if(status != "") {
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
      alert("An account with that username and password could not be found.");
    }

  }

  const classes = useStyles();

  return (
    <section className={classes.section}>
      <Container maxWidth="xs">
        <Box pt={8} pb={10}>
          <Box mb={3} textAlign="center">
            <Typography variant="h5" component="h2">Sign in</Typography>
          </Box>
          <Box>
            
            <ValidatorForm onSubmit={handleSubmit} onError={errors => console.log(errors)}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextValidator variant="outlined" fullWidth
                    label="Username *"
                    onChange={onChangeUsername}
                    name="username"
                    value={username}
                    validators={['required']}
                    errorMessages={['This field is required']}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextValidator variant="outlined" fullWidth type="password"
                    label="Password *"
                    onChange={onChangePassword}
                    name="password"
                    value={password}
                    validators={['required']}
                    errorMessages={['This field is required']}
                  />
                </Grid>
              </Grid>
              <Box my={2}>
                <Button type="submit" fullWidth variant="contained" color="primary">Login</Button>
              </Box>
              <Box textAlign="center">
                <Link to="/register" variant="body2" style={{ textDecoration: 'none' }}>Don't have an account? Register</Link>
              </Box>
            </ValidatorForm>

          </Box>
        </Box>
      </Container>
    </section>
  );
}