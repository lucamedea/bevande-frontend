import axios from "axios";

export function getProduct(productId) {
const url = require("url");
const queryParams = {
  productId: productId,
};
const params = new url.URLSearchParams(queryParams);
console.log(params);
axios
  .get(`http://bevanderia.altervista.org/bevandeapi/API/prodotto/getProduct.php/?${params}`)
  .then(function (response) {
    console.log(response.data);
  });
}
