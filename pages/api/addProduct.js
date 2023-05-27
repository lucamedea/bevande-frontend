import axios from "axios";

export async function AddProduct(nome,descrizione,prezzo,categoria,quantita,active,Fats,Kcal,Proteins,Sugars) {
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
        Fats: Fats,
        Kcal: Kcal,
        Proteins: Proteins,
        Sugars: Sugars
      },
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  return res.data;
  }