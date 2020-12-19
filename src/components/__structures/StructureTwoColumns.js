import React from 'react';
import Grid from '@material-ui/core/Grid';

export default function Structure(props) {
  const buckets = {
    '1': (Array.isArray(props.bucket1) ? props.bucket1 : []),
    '2': (Array.isArray(props.bucket2) ? props.bucket2 : [])
  }

  return (
    <Grid container justify="center">
      <Grid item xs={12} md={3}>
        {buckets['1'].map(component => <React.Fragment key="1">{component}</React.Fragment>)} 
      </Grid>
      <Grid item xs={12} md={3}>
        {buckets['2'].map(component => <React.Fragment key="2">{component}</React.Fragment>)} 
      </Grid>
    </Grid>
  );
}