import React from 'react';
import Container from '@material-ui/core/Container';

export default function Structure(props) {
  const buckets = {
    '1': (Array.isArray(props.bucket1) ? props.bucket1 : [])
  }

  return (
    <Container align="center">
      {buckets['1'].map(component => <React.Fragment key="1">{component}</React.Fragment>)} 
    </Container>
  );
}