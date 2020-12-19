import React, { useState, useContext } from 'react';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

export default function Component(props) {
  return (
    <section>
      <Container maxWidth="xs">
        <Box pt={0} pb={5}>
          <Box mb={3} textAlign="center">
            <Typography variant="h5" component="h2">Revenue Streams</Typography>
          </Box>
          <Box>

              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField variant="outlined" fullWidth 
                    label="Sales Revenue *" 
                    onChange={props.onChangeSalesRevenue} 
                    name="salesRevenue"
                    value={props.salesRevenue}
                    error={props.salesRevenue !== "" && !props.salesRevenue.match("^[0-9]+(\.[0=9]{0,2})?$")}
                    helperText={props.salesRevenue !== "" && !props.salesRevenue.match("^[0-9]+(\.[0=9]{0,2})?$") ? "Must be a valid number" : ""}
                    />
                </Grid>
                <Grid item xs={12}>
                  <TextField variant="outlined" fullWidth 
                    label="Intangible Revenue" 
                    onChange={props.onChangeIntangibleRevenue} 
                    name="intangibleRevenue"
                    value={props.intangibleRevenue}
                    error={props.intangibleRevenue !== "" && !props.intangibleRevenue.match("^[0-9]+(\.[0=9]{0,2})?$")}
                    helperText={props.intangibleRevenue !== "" && !props.intangibleRevenue.match("^[0-9]+(\.[0=9]{0,2})?$") ? "Must be a valid number" : ""}
                    />
                </Grid>
                <Grid item xs={12}>
                  <TextField variant="outlined" fullWidth 
                    label="Potential Revenue" 
                    onChange={props.onChangePotentialRevenue} 
                    name="potentialRevenue"
                    value={props.potentialRevenue}
                    error={props.potentialRevenue !== "" && !props.potentialRevenue.match("^[0-9]+(\.[0=9]{0,2})?$")}
                    helperText={props.potentialRevenue !== "" && !props.potentialRevenue.match("^[0-9]+(\.[0=9]{0,2})?$") ? "Must be a valid number" : ""}
                    />
                </Grid>
              </Grid>

          </Box>
        </Box>
      </Container>
    </section>
  );
}