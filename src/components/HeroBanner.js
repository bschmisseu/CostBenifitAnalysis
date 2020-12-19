import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { emphasize, fade, darken, lighten } from '@material-ui/core/styles/colorManipulator';

import clsx from 'clsx';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import heroBanner from './../images/blackwhite.jpg';
import { Link } from 'react-router-dom';

import User from './../models/User';

const useStyles = makeStyles((theme) => ({
  div: {
    position: "relative",
  },
  image: {
    width: "100%",
  },
  button: {
    color: "white",
    borderColor: "white",
    [theme.breakpoints.down('xs')]: {
      fontSize: "10px",
      top: "65%",
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: "15px",
    },
    [theme.breakpoints.up('md')]: {
      fontSize: "20px",
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: "25px",
    },
    position: "absolute",
    top: "60%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    "&:hover": {
      background: "rgba(60, 60, 60, 0.25)",
    },
  },
  title: {
    color: "white",
    [theme.breakpoints.down('xs')]: {
      fontSize: "30px",
      top: "40%",
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: "38px",
    },
    [theme.breakpoints.up('md')]: {
      fontSize: "50px",
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: "65px",
    },
    fontWeight: "bold",
    position: "absolute",
    top: "45%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "94%"
  }

}
));

export default function Component(props) {
  const classes = useStyles();

  let actionButton;

  if (User._id == undefined) {
    actionButton = 
      <Link to="/login" style={{ textDecoration: 'none' }}>
        <Button variant="outlined" className={classes.button}>get started</Button>
      </Link>
  }
  else {
    actionButton = 
      <Link to="/input" style={{ textDecoration: 'none' }}>
        <Button variant="outlined" className={classes.button}>get started</Button>
      </Link>
  }

  
  return (
    <div className={classes.div}>
      <img src={heroBanner} alt="" className={classes.image} />
      <Typography align="center" variant="h3" className={classes.title} gutterBottom={true} color="textPrimary">welcome to cost benefit analysis</Typography>
      {actionButton}
    </div>
  );
}