import React from 'react';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

import  Entry  from './../models/Entry';

export default function Component(props) {

  return (
    <section>
      <Container maxWidth="xs">
        <Box pt={0} pb={5} align="right">
          <Box mb={3} textAlign="center">
            <Typography variant="h5" component="h2">Net Profit</Typography>
          </Box>
            <Box>

              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography>( {Entry.cost[0]} + {Entry.cost[1]} + {Entry.cost[2]} + {Entry.cost[3]} + {Entry.cost[4]} ) - ( {Entry.revenues[0]} + {Entry.revenues[1]} + {Entry.revenues[2]} )</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography> = {Entry.netProfit}</Typography>
                </Grid>
              </Grid>

          </Box>
        </Box>
      </Container>
    </section>
  );
}