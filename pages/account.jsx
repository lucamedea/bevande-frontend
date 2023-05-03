import React, { useState } from "react";
import { Grid, Text,Row, Spacer } from "@nextui-org/react";
import DisabledTextField from '../components/disabledTextField.jsx';
import TextField from "../components/textField.jsx";

const Settings = () => {
  const [showDeleteAccount, setShowDeleteAccount] = useState(false);
  const [showChange, setShowChange] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  const nameSurname = `${localStorage.getItem("name")} ${localStorage.getItem(
    "surname"
  )}`;
  const email = localStorage.getItem("email");

  return (
    <Grid.Container style={{ height: "100vh", width: "100vw", background:"#EBCEF5"}}>
        <Row
        justify="center"
        xs={12}
        style={{
        alignContent:"center",
          marginTop: "18vh",
        }}
      >  
      <Text style={{fontWeight:"bold", textAlign:"center"}} size="$4xl"> Profilo </Text>
      </Row>
      <Spacer y="1"/>
      <Row  justify="center"
        xs={12}
        style={{
        alignContent:"center",
        }}>
          <DisabledTextField initialValue="Your Name" label="Name:" width="200px"/>
      </Row>
    </Grid.Container>
  );
};

export default Settings;
