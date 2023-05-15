import React, { useState } from "react";
import { Grid, Text,Row, Spacer } from "@nextui-org/react";
import NVtable from '../components/tableValoriNutrizionali';

const NutitionalValues = () => {
    return(
    <Grid.Container style={{ height: "100vh", width: "100vw", background:"white"}}>
    <Row
    justify="center"
    xs={12}
    style={{
    alignContent:"center",
      marginTop: "3vh",
    }}
  >  
<NVtable/>
  </Row>
  </Grid.Container>
    );
}
export default NutitionalValues;