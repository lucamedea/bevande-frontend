import axios from "axios";

export async function AddProduct(nome,descrizione,prezzo,categoria,quantita,active,fats,kcal,proteins,sugars) {
    const res = await axios
    .post(
      "http://bevanderia.altervista.org/bevandeapi/API/prodotto/addProduct.php",
      {
        nome: nome,
        descrizione: descrizione,
        prezzo: prezzo,
        categoria: categoria,
        quantita: quantita,
        active: active,
        fats: fats,
        kcal: kcal,
        proteins: proteins,
        sugars: sugars
      },
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  return res.data;
  }