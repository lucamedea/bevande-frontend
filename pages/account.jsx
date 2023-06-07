import React, { useState } from "react";
import { Grid, Text,Row, Spacer } from "@nextui-org/react";
import DisabledTextField from '../components/disabledTextField.jsx';
import TextField from "../components/textField.jsx";
import PasswordTextField from "../components/passwordTextField";
import SubmitButton from "../components/submitButton.jsx";
import PrivacyPolicy from "../components/modals/privacyPolicy";
import TermsConditions from '../components/modals/termsConditions';
import Navbar1 from "@/components/navbar/navbar.jsx";
import { useQuery } from "react-query";
import { QueryClientProvider, QueryClient } from "react-query";
import { getUser } from "./api/getUser.js";

const Settings = () => {
  const [showChange, setShowChange] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const clientQuery = new QueryClient();
  
  const accountQuery = useQuery({
    queryKey: ["account"],
    queryFn:()=>{return(getUser());} ,
    staleTime: 3000,
    refetchInterval: 1000,
  });

  return (
    <QueryClientProvider client={clientQuery}>
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
      <Text style={{fontWeight:"bold", textAlign:"center"}} size="$4xl"> Profilo </Text>
      </Row>
      <Row  justify="center"
        xs={12}
        style={{
        alignContent:"center",
        }}>
          <DisabledTextField initialValue="Blog" label="Nome:" width="200px"/>
          <Spacer x="6"/>
          <PasswordTextField label="Password" width="200px"/>
      </Row>
      <Row  justify="center"
        xs={12}
        style={{
        alignContent:"center",
        }}>
            <DisabledTextField initialValue="Neutral" label="Cognome:" width="200px"/>
          <Spacer x="6"/>
          <PasswordTextField label="Nuova Password" width="200px"/>
          </Row>
          <Row  justify="center"
        xs={12}
        style={{
        alignContent:"center",
        }}>
            <DisabledTextField initialValue="neutral.blog@gmail.com" label="Email:" width="200px"/>
          <Spacer x="6"/>
          <DisabledTextField initialValue="1998-03-11" label="Data di Nascita:" width="200px"/>
          </Row>
          <Row  justify="center"
        xs={12}
        style={{
        alignContent:"center",
        }}>
          <SubmitButton width="200px" text="Esci" onPress={()=>{ 
            window.location.replace("/products")}} />
          <Spacer x="7"/>
          <SubmitButton width="200px" text="Cambia Password"/>
          </Row>
          <Row  justify="center"
        xs={12}
        style={{
        alignContent:"center",
        }}>
          <PrivacyPolicy width="800px" show={showPrivacy} close={()=>setShowPrivacy(false)}/>
          <Spacer x="7"/>
          <TermsConditions width="800px" show={showTerms} close={()=>setShowTerms(false)}/>

          </Row>
    </Grid.Container>
    </>
    </QueryClientProvider>
  );
};

export default Settings; 
