import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';

import Navbar from '../components/Navbar';
import StructureTwoColumns from '../components/__structures/StructureTwoColumns';
import StructureContainer from '../components/__structures/StructureContainer';
import InputCost from '../components/InputCost';
import InputRevenue from '../components/InputRevenue';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import User from   "./../models/User";
import Entry from "./../models/Entry";
import service from './../service/EntryService';
import { EntryContext } from './../context/EntryContext';

export default function InputPage(props) {
  const [entry, setEntryContext] = useContext(EntryContext);

  const [name, setName] = useState(entry.name);
  const [directCost, setDirectCost] = useState(entry.cost[0].toString());
  const [indirectCost, setIndirectCost] = useState(entry.cost[1].toString());
  const [intangibleCost, setIntangibleCost] = useState(entry.cost[2].toString());
  const [opportunityCost, setOpportunityCost] = useState(entry.cost[3].toString());
  const [potentialRiskCost, setPotentialRiskCost] = useState(entry.cost[4].toString());
  const [salesRevenue, setSalesRevenue] = useState(entry.revenues[0].toString());
  const [intangibleRevenue, setIntangibleRevenue] = useState(entry.revenues[1].toString());
  const [potentialRevenue, setPotentialRevenue] = useState(entry.revenues[2].toString());

  const onChangeName = (event) => {
    setName(event.target.value);
  }
  const onChangeDirectCost = (event) => {
    setDirectCost(event.target.value);
  }
  const onChangeIndirectCost = (event) => {
    setIndirectCost(event.target.value);
  }
  const onChangeIntangibleCost = (event) => {
    setIntangibleCost(event.target.value);
  }
  const onChangeOpportunityCost = (event) => {
    setOpportunityCost(event.target.value);
  }
  const onChangePotentialRiskCost = (event) => {
    setPotentialRiskCost(event.target.value);
  }
  const onChangeSalesRevenue = (event) => {
    setSalesRevenue(event.target.value);
  }
  const onChangeIntangibleRevenue = (event) => {
    setIntangibleRevenue(event.target.value);
  }
  const onChangePotentialRevenue = (event) => {
    setPotentialRevenue(event.target.value);
  }

  let history = useHistory();

  const handleSubmit = async () => {

  let json = JSON.stringify({
    "_id": entry._id,
    "name": name,
    "cost": [directCost, indirectCost, intangibleCost, intangibleCost, opportunityCost, potentialRiskCost],
    "revenues": [salesRevenue, intangibleRevenue, potentialRevenue],
    "_userId": User._id
  });

  let status = await service.createEntry(json);
  event.preventDefault();

  if(status != "") {
    json = JSON.stringify({
      "_userId": User._id
    });

    User.entries = await service.getUserEntries(json);

    Entry._id = status["_id"];
    Entry.name = status["name"];
    Entry.cost = status["cost"];
    Entry.revenues = status["revenues"];
    Entry._userId = status["_userId"];
    Entry.ratio = status ["ratio"];
    Entry.netProfit = status["netProfit"];
    history.push("/output");
  }
  else {
    alert("Failed to create entry.");
  }
}

  return (
    <React.Fragment>
      <Navbar />
      <br/>
      <Box pt={5} pb={0}>
        <Box mb={4} textAlign="center">
        <Typography variant="h4" component="h2">Entry Input</Typography>
          <TextField variant="outlined" style={{width: "300px"}}
            label="Entry Name *" 
            onChange={props.onChangeName} 
            name="name"
            value={name}
            error={name !== "" && !name.match("^[A-Za-z]")}
            helperText={name !== "" && !name.match("^[A-Za-z]") ? "Must be a valid name" : ""}
            onChange={onChangeName}
            margin="normal"
          />
        </Box>
      </Box>
      <StructureTwoColumns
        bucket1={[<InputCost 
          directCost  = {directCost}
          onChangeDirectCost = {onChangeDirectCost}
          indirectCost = {indirectCost}
          onChangeIndirectCost = {onChangeIndirectCost}
          intangibleCost = {intangibleCost}
          onChangeIntangibleCost = {onChangeIntangibleCost}
          opportunityCost = {opportunityCost}
          onChangeOpportunityCost = {onChangeOpportunityCost}
          potentialRiskCost = {potentialRiskCost}
          onChangePotentialRiskCost = {onChangePotentialRiskCost}
          />]}
        bucket2={[<InputRevenue 
            salesRevenue = {salesRevenue}
            onChangeSalesRevenue = {onChangeSalesRevenue}
            intangibleRevenue = {intangibleRevenue}
            onChangeIntangibleRevenue = {onChangeIntangibleRevenue}
            potentialRevenue = {potentialRevenue}
            onChangePotentialRevenue = {onChangePotentialRevenue}
          />]}
      />


      <StructureContainer bucket1={[<Button color="primary" variant="contained" onClick={handleSubmit}>Calculate</Button>]} />
      <br></br>
      <hr/>
      <Footer/>
    </React.Fragment>
  );
}

