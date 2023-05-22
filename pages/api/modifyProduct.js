import axios from "axios";

export function ModifyProduct(id,nome,descrizione,prezzo,id_categoria,quantita,active) {
    return axios
      .post(
        "http://bevanderia.altervista.org/bevandeapi/API/prodotto/modifyProduct.php",
        {
            id:id,
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