import React, { useState, useEffect } from "react";
import { Modal, Text, Row, Spacer } from "@nextui-org/react";
import TextField from "../textField.jsx";
import Button from "../submitButton.jsx";
import SelectActive from "../selectActive";
import SelectCategory from "../selectCategory";
import modifyProduct from "../../pages/api/modifyProduct";
import { useQuery } from "react-query";
import {getProduct} from "../../pages/api/getProduct";

export default function ModifyProduct({ width, height, show, close, productId}) {
  const [nome, setNome] = useState();
  const [active, setActive] = useState();
  const [descrizione, setDescrizione] = useState();
  const [prezzo, setPrezzo] = useState();
  const [quantita, setQuantita] = useState();
  const [categoria, setCategoria] = useState(new Set(["1"]));
  const [Kcal, setKcal] = useState();
  const [Fats, setFats] = useState();
  const [Sugars, setSugars] = useState();
  const [Proteins, setProteins] = useState();

  const handleText = (event) => {
    setQuantity(event.target.value);
  };
  const [selectedCategory, setSelectedCategory] = useState(
    new Set(["categoria"])
  );

  useEffect(() => {
    // Effettua la richiesta API per recuperare i dati dal database
    fetch("http://bevanderia.altervista.org/bevandeapi/API/utente/getProduct.php?id={productId}")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setData(data);
      })
      .catch(error => {
        console.error('Errore nella richiesta:', error);
      });
  }, []);

  const [id, setId] = useState(productId);
  return (
    <Modal
      style={{ height: height }}
      width={width}
      closeButton
      aria-labelledby="modal-title"
      open={show}
      onClose={close}
    >
      <Text size={24} weight="bold">
        Modifica prodotto
      </Text>
      <Spacer y="3"/>
      <Modal.Body>
        <Row justify="center" xs={12}>
          <TextField
            label="Nuovo Nome"
            width="300px"
          //  initialValue={product.data["nome"]}
            handleChange={(e) => setNome(e.target.value)}
          />
          <Spacer x="4.5" />
          <TextField
            label="Prezzo(€)"
            width="300px"
          //  initialValue={product.data["prezzo"]}
            handleChange={(e) => setPrezzo(e.target.value)}
          />
        </Row>
        <Spacer y="0.3" />
        <Row justify="center" xs={12} display="flex" align="top">
        <TextField
            label="Proteine"
            width="300px"
         //   initialValue={product.data["Proteins"]}
            handleChange={(e) => setProteins(e.target.value)}
          />
         
          <Spacer x="4.5" />
          <TextField
            label="Quantita"
            width="300px"
          //  initialValue={product.data["quantita"]}
            handleChange={(e) => setQuantita(e.target.value)}
          />
        </Row>
        <Spacer y="0.3" />
        <Row justify="center" xs={12}>
        <TextField
            label="Grassi"
            width="300px"
          // initialValue={product.data["Fats"]}
            handleChange={(e) => setFats(e.target.value)}
          />
         <Spacer x="4.5" />
        <TextField
            label="Zuccheri"
            width="300px"
          //  initialValue={product.data["Sugars"]}
            handleChange={(e) => setSugars(e.target.value)}
          />  
        </Row>
        <Spacer y="0.3" />
        <Row justify="center" xs={12}>
          <TextField
            label="Kcal"
            width="300px"
          //  initialValue={product.data["Kcal"]}
            handleChange={(e) => setKcal(e.target.value)}
          />
           <Spacer x="4.5" />

           <TextField
            label="Descrizione"
            width="300px"
          //  initialValue={product.data["descrizione"]}
            handleChange={(e) => setDescrizione(e.target.value)}
          />

          </Row>
          <Spacer y="1"/>
          <Row justify="center" xs={12}>
          <SelectCategory
            label="Categoria"
            width="300px"
            selected={selectedCategory}
            setSelected={setSelectedCategory}
          //  defaultValue={product.data["categoria"]}
            handleChange={(e) => setCategoria(e.target.value)}
          />
          <Spacer x="4.5" />

          <SelectActive
            label="Attivo"
            width="300px"
           // boolActive={product.data["active"]}
            handleChange={(e) => setActive(e.target.value)}
          />
          </Row>

    
      </Modal.Body>
      <Modal.Footer
        style={{
          justifyContent: "center",
          display: "flex",
          paddingBottom: "3vw",
        }}>

        <div
          style={{
            justifyContent: "center",
            display: "flex" }}>

          <Button
            height="60px"
            width="120px"
            text="Modifica"
            textsize="20"
            onPress={() => {
              modifyProduct(
                id,
                nome,
                prezzo,
                descrizione,
                quantita,
                categoria["currentKey"],
                active,
                Kcal,
                Fats,
                Proteins,
                Sugars
              );
              closeHandler();
            }} />
        </div>
      </Modal.Footer>
    </Modal>
  );
  }
