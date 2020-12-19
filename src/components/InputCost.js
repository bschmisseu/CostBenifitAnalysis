import React, { useContext }from 'react';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

import Entry from "./../models/Entry";
import { EntryContext } from './../context/EntryContext';

export default function Component(props) {
  const [entry, setEntryContext] = useContext(EntryContext);
  
  return (
    <section>
      <Container maxWidth="xs">
        <Box pt={0} pb={5} align="right">
          <Box mb={3} textAlign="center">
            <Typography variant="h5" component="h2">Cost Streams</Typography>
          </Box>
          <Box>

              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField variant="outlined" fullWidth 
                    id="directCost"
                    label="Direct Cost *" 
                    onChange={props.onChangeDirectCost} 
                    name="directCost"
                    value={props.directCost}
                    error={props.directCost !== "" && !props.directCost.match("^[0-9]+(\.[0=9]{0,2})?$")}
                    helperText={props.directCost !== "" && !props.directCost.match("^[0-9]+(\.[0=9]{1,2})?$") ? "Must be a valid number" : ""}
                    />
                </Grid>
                <Grid item xs={12}>
                  <TextField variant="outlined" fullWidth 
                    label="Indirect Cost *" 
                    onChange={props.onChangeIndirectCost} 
                    name="indirectCost"
                    value={props.indirectCost}
                    error={props.indirectCost !== "" && !props.indirectCost.match("^[0-9]+(\.[0=9]{0,2})?$")}
                    helperText={props.indirectCost !== "" && !props.indirectCost.match("^[0-9]+(\.[0=9]{0,2})?$") ? "Must be a valid number" : ""}
                    />
                </Grid>
                <Grid item xs={12}>
                  <TextField variant="outlined" fullWidth 
                    label="Intangible Cost" 
                    onChange={props.onChangeIntangibleCost} 
                    name="intangibleCost"
                    value={props.intangibleCost}
                    error={props.intangibleCost !== "" && !props.intangibleCost.match("^[0-9]+(\.[0=9]{0,2})?$")}
                    helperText={props.intangibleCost !== "" && !props.intangibleCost.match("^[0-9]+(\.[0=9]{0,2})?$") ? "Must be a valid number" : ""}
                    />
                </Grid>
                <Grid item xs={12}>
                  <TextField variant="outlined" fullWidth 
                    label="Opportunity Cost" 
                    onChange={props.onChangeOpportunityCost} 
                    name="opportunityCost"
                    value={props.opportunityCost}
                    error={props.opportunityCost !== "" && !props.opportunityCost.match("^[0-9]+(\.[0=9]{0,2})?$")}
                    helperText={props.opportunityCost !== "" && !props.opportunityCost.match("^[0-9]+(\.[0=9]{0,2})?$") ? "Must be a valid number" : ""}
                    />
               </Grid>
                <Grid item xs={12}>
                  <TextField variant="outlined" fullWidth 
                    label="Potential Risk Cost" 
                    onChange={props.onChangePotentialRiskCost} 
                    name="potentialRiskCost"
                    value={props.potentialRiskCost}
                    error={props.potentialRiskCost !== "" && !props.potentialRiskCost.match("^[0-9]+(\.[0=9]{0,2})?$")}
                    helperText={props.potentialRiskCost !== "" && !props.potentialRiskCost.match("^[0-9]+(\.[0=9]{0,2})?$") ? "Must be a valid number" : ""}
                    />
                </Grid>
              </Grid>

          </Box>
        </Box>
      </Container>
    </section>
  );
}