
import React, { useState } from "react";
import { Grid, Text,Row, Spacer } from "@nextui-org/react";
import TableUser from '../components/tableUser';
import Navbar1 from "../components/navbar/navbar";
const Users = () => {
    return(
      <>
<Navbar1/>
    <Grid.Container style={{ height: "100vh", width: "100vw", background:"white"}}>
    <Row
    justify="center"
    xs={12}
    style={{
    alignContent:"center",
      marginTop: "3vh",
    }}
  >  
<TableUser/>
  </Row>
  </Grid.Container>
  </>
    );
}
export default Users;