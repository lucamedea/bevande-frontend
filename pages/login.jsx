import { Grid, Text, Image} from "@nextui-org/react";
import React, { useState } from "react";
import TextField from '../components/textField.jsx';
import PasswordTextField from '../components/passwordTextField.jsx';
import Button from '../components/submitButton.jsx';
import { Login } from "./api/login";


const LoginPage = ({ setToken }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async () => {
    const utente = await Login(email, password);
      console.log(utente);
    const userId = utente.id;
      setToken(utente.token);
      localStorage.setItem("email", utente.email);
      localStorage.setItem("password", utente.password);
      window.location.reload();
  };

  return (
    <Grid.Container
      style={{
        background: "#A351E280",
        height: "100vh",
        width: "100vw",

        marginBottom: "2vh",
        marginRight: "2vh",
      }}
      gap={0}
    >
     <Grid
        justify="center"
        xs={12}
        style={{
          marginTop: "25vh",
        }}
      >  
      <Text size="$4xl"> LA TUA BEVANDERIA</Text>
      </Grid>

      <Grid justify="center" xs={12}>
        <TextField
        label="E-mail"
        placeholder="Your e-mail"
        width="250px"
        handleChange={(e) => setEmail(e.target.value)}
        />
      </Grid>

      <Grid justify="center" xs={12}>
        <PasswordTextField
        label="Password"
        placeholder="Your password"
          width="250px"
          handleChange={(e) => setPassword(e.target.value)}
        />
      </Grid>
     
      <Grid
        justify="center"
        xs={12}
        style={{
          marginBottom: "25vh",
          marginTop:"5vh"
        }}
      >
        <Button
          height="50px"
          width="200px"
          text="Accedi"
          textSize={20}
          onPress={handleSubmit}
        />
      </Grid>
    </Grid.Container>
  );
};

export default LoginPage;
