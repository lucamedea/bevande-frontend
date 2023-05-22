
import React, { useState } from "react";
import { Grid, Text,Row, Spacer, textWeights } from "@nextui-org/react";
import TableProduct from '../components/tableProduct';
import NavBar1 from '../components/navbar/navbar';
import SubmitButton from "@/components/submitButton";
import AddProduct from '../components/modals/addProduct';

const Products = () => {
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

<Text style={{fontFamily:"revert"}} size="$3xl"> I TUOI PRODOTTI</Text>
  </Row>
  
  <Row
    justify="center"
    xs={12}
    style={{
    alignContent:"center"}}>  
<TableProduct/>
  </Row>

    <Row
    justify="center"
        xs={12}
    style={{
    alignContent:"center" }}>  
<AddProduct width="800px" height="800px"/>

  </Row>

  </Grid.Container>
  </>
    );
}
export default Products;