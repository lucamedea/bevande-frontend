import axios from "axios";

export function AddProduct(nome,descrizione,prezzo,id_categoria,quantita,active) {
    return axios
      .post(
        "http://bevanderia.altervista.org/bevandeapi/API/prodotto/addProduct.php",
        {
          nome:nome,
          descrizione:descrizione,
          prezzo:prezzo,
          id_categoria:id_categoria,
          quantita:quantita,
          active:active,
        },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then((res) => res.data);
  }