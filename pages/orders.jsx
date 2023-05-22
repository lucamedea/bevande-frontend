
import React, { useState } from "react";
import { Grid, Text,Row, Spacer } from "@nextui-org/react";
import TableOrder from '../components/tableOrder';
import NavBar1 from '../components/navbar/navbar';

const Orders = () => {
    return(
      <>
<NavBar1/>
    <Grid.Container style={{ height: "100vh", width: "100vw", background:"white"}}>
    <Row
    justify="center"
    xs={12}
    style={{
    alignContent:"center",
    marginTop:"3vw" }}>  

<Text style={{fontFamily:"revert"}} size="$3xl"> I TUOI ORDINI</Text>
  </Row>
    <Row
    justify="center"
    xs={12}
    style={{
    alignContent:"center",
    marginBottom:"28vw"
    }}
  >  
<TableOrder/>
  </Row>
  </Grid.Container>
  </>
    );
}
export default Orders;