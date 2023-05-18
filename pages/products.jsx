
import React, { useState } from "react";
import { Grid, Text,Row, Spacer } from "@nextui-org/react";
import TableProduct from '../components/tableProduct';
import NavBar1 from '../components/navbar/navbar';

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
      marginTop: "3vh",
    }}
  >  
<TableProduct/>
  </Row>
  </Grid.Container>
  </>
    );
}
export default Products;