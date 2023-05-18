import axios from "axios";

export function Login(email, password) {
    return axios
      .post(
        "http://bevanderia.altervista.org/bevandeapi/API/utente/login.php",
        {
          email: email,
          password: password,
        },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then((res) => res.data);
  }