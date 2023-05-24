import axios from "axios";

export function getUser(id) {
const url = require("url");
const queryParams = {
  id: id,
};
const params = new url.URLSearchParams(queryParams);
console.log(params);
axios
  .get(`http://bevanderia.altervista.org/bevandeapi/API/utente/getUser.php/?${params}`)
  .then(function (response) {
    console.log(response.data);
  });
}
