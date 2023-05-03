import { Grid, Text, Image} from "@nextui-org/react";
import React, { useState } from "react";
import TextField from '../components/textField.jsx';
import PasswordTextField from '../components/passwordTextField.jsx';
import Button from '../components/submitButton.jsx';


const LoginPage = ({ setToken }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async () => {
    const user = await Login(email, password);
    console.log(user);
    setToken(user.token);
    localStorage.setItem("id", user.id);
    localStorage.setItem("name", user.name);
    localStorage.setItem("surname", user.surname);
    localStorage.setItem("email", user.email);
    window.location.reload();
  };

  return (
    <Grid.Container
      style={{
        background: "#A351E280",
        height: "96vh",
        width: "74vw",
        borderRadius: "20px",

        marginTop: "2vh",
        marginBottom: "2vh",
        marginLeft: "13vw",
        marginRight: "13vw",
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
