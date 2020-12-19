import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { emphasize, fade, darken, lighten } from '@material-ui/core/styles/colorManipulator';

import clsx from 'clsx';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

const useStyles = makeStyles((theme) => ({
 title: {
   color: "textPrimary",
     [theme.breakpoints.down('xs')]: {
       fontSize: "30px",
     },
     [theme.breakpoints.up('sm')]: {
       fontSize: "35px",
     },
     [theme.breakpoints.up('md')]: {
       fontSize: "45px",
     },
     [theme.breakpoints.up('lg')]: {
       fontSize: "50px",
     }
 } 
}
));

export default function Component(props) {
  const classes = useStyles();

  return (
<section>
  <Container maxWidth="md">
    <Box py={8} textAlign="center">
      <Typography variant="overline" component="span">A simple decision</Typography>
      <Typography variant="h3" component="h2" className={classes.title}>we've built a tool to analyze the financial breakdown of your company's upcoming product</Typography>
      <Box mt={4}>
        <Link to="/login" style={{ textDecoration: 'none' }}>
          <Button color="primary" endIcon={<ArrowRightAltIcon />}>experience it now</Button>
        </Link>
      </Box>
    </Box>
  </Container>
</section>
  );
}