import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';

import Navbar from '../components/Navbar';
import StructureTwoColumns from '../components/__structures/StructureTwoColumns';
import StructureContainer from '../components/__structures/StructureContainer';
import ProfitRatio from '../components/ProfitRatio';
import NetProfit from '../components/NetProfit';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import Entry from './../models/Entry';

export default function OutputPage(props) {

  let history = useHistory();

  const handleSubmit = async () => {

    history.push("/input");

  }

  console.log(Entry.name);

  return (
    <React.Fragment>
      <Navbar />
      <Box pt={7} pb={0}>
        <Box mb={4} textAlign="center">
        <Typography variant="h4" component="h2">Entry Output</Typography>
        <Typography variant="h5" component="h2">{Entry.name}</Typography>
        </Box>
      </Box>
      <StructureTwoColumns
        bucket1={[<ProfitRatio />]}
        bucket2={[<NetProfit />]}
      />


      <StructureContainer bucket1={[<Button color="primary" variant="contained" onClick={handleSubmit}>Calculate Another</Button>]} />
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <hr/>
      <Footer/>
    </React.Fragment>
  );
}
