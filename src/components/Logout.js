import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

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

export default function Component() {

    User.firstName = '';
    User._id = '';
    User.entries = [];

    let history = useHistory();

    const clickHome = () => {
        User.name = '';
        User._id = undefined;
        User.entries = [];
        history.push('/');
    }

  const classes = useStyles();

  return (
    <section className={classes.section}>
      <Container maxWidth="xs">
        <Box pt={8} pb={10}>
          <Box mb={3} textAlign="center">
            <Typography variant="h2" component="h1">Logout</Typography>
            <Typography variant="h5" component="h2">Thank you for visiting!</Typography>
          </Box>
          <Box>
            
              <Box my={2}>
                <Button type="button" onClick={ clickHome } fullWidth variant="contained" color="primary">Home Page</Button>
              </Box>
          </Box>
        </Box>
      </Container>
    </section>
  );
}