import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { emphasize, fade, darken, lighten } from '@material-ui/core/styles/colorManipulator';

import clsx from 'clsx';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import logo from './../images/logo.png';


const useStyles = makeStyles((theme) => ({
  rootBox: {
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center'
    },
  },
  footerNav: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginRight: 'auto',
    marginLeft: theme.spacing(3),
    marginBottom: theme.spacing(0),

    [theme.breakpoints.down('md')]: {
      width: '100%',
      marginLeft: 'auto',
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(2),
    }
  },
  footerLink: {
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    [theme.breakpoints.down('md')]: {
      marginBottom: theme.spacing(2),
    }
  },
  copy: {
    textAlign: 'center'
  }
}
));

export default function Component(props) {
  const classes = useStyles();

  return (
<footer>
  <Container maxWidth="lg">
    <Box py={3}  display="flex" flexWrap="wrap" alignItems="center" className={classes.rootBox}>
      <Box component="nav" className={classes.footerNav}>
        <Link to="/" variant="h5" color="inherit" underline="none">
          <img src={logo} alt="" width="120" />
        </Link>
      </Box>
      <Typography color="textSecondary" component="p" variant="body2" gutterBottom={false} className={classes.copy}>© 2020 Cost Benefit Analysis. All rights reserved.</Typography>
    </Box>
  </Container>
</footer>
  );
}