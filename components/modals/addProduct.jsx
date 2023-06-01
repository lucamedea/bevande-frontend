import React, { useState } from "react";
import { createContext } from 'react';
import { Modal, Text, Row, Spacer } from "@nextui-org/react";
import TextField from "../textField.jsx";
import SelectActive from "../selectActive";
import SelectCategory from "../selectCategory";
import Button from "../submitButton.jsx";
import { AddProduct } from "../../pages/api/addProduct.js";

export default function AddNewProduct({ width, height, show, close }) {
  const [nome, setNome] = useState();

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
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);

  const handleChange = (event) => {
    console.log(event.target.value);}

    const [selectedCategory, setSelectedCategory] = useState(
      new Set(["categoria"])
    );
    const [active, setActive] = useState(
      new Set(["active"])
      
    );
  

  const closeHandler = () => {
    setVisible(false);
    console.log("closed");}

  return (
    <div>
<Button width="200px" text="Add Product" onPress={handler}/>
    <Modal
      style={{ height: height }}
      width={width}
      closeButton
      aria-labelledby="modal-title"
      open={visible}
      onClose={closeHandler}
    >
      <Text size={24} weight="bold">
        Aggiungi nuovo prodotto
      </Text>
      <Spacer y="3"/>
      <Modal.Body>
        <Row justify="center" xs={12}>
          <TextField
            label="Nome"
            width="300px"
            handleChange={(e) => setNome(e.target.value)}
          />
          <Spacer x="4.5" />
          <TextField
            label="Prezzo(€)"
            width="300px"
            handleChange={(e) => setPrezzo(e.target.value)}
          />
        </Row>
        <Spacer y="0.3" />
        <Row justify="center" xs={12}>
        <TextField
            label="Quantita"
            width="300px"
            handleChange={(e) => setQuantita(e.target.value)}
          />
          <Spacer x="4.5" />
          <TextField
            label="Proteine"
            width="300px"
            handleChange={(e) => setProteins(e.target.value)}
          />
          </Row>
          <Spacer y="0.3" />
        <Row justify="center" xs={12}>
        <TextField
            label="Grassi"
            width="300px"
            handleChange={(e) => setFats(e.target.value)}
          />
         <Spacer x="4.5" />
         <TextField
            label="Descrizione"
            width="300px"
            handleChange={(e) => setDescrizione(e.target.value)}
          />
        </Row>
        <Spacer y="0.3" />
        <Row justify="center" xs={12}>
          <TextField
            label="Zuccheri"
            width="300px"
            handleChange={(e) => setSugars(e.target.value)}
          />
          <Spacer x="4.5" />
          <TextField
            label="Kcal"
            width="300px"
            handleChange={(e) => setKcal(e.target.value)}
          />
          </Row>
          <Spacer y="1"/>
          <Row justify="center" xs={12} display="flex" align="top">
          <SelectCategory
  label="Categoria"
  width="350px"
  selected={categoria}
  setSelected={setCategoria}
  handleChange={(e) => setCategoria(e.target.value)}
/>
<Spacer x="4.5" />
<SelectActive
  label="Attivo"
  width="350px"
  selected={active}
  setSelected={setActive}
  handleChange={(e) => setActive(e.target.value)}
              />
        </Row>

      </Modal.Body>
      <Modal.Footer
        style={{
          justifyContent: "center",
          display: "flex",
          paddingBottom: "3vw",
        }}
      >
        <div
          style={{
            justifyContent: "center",
            display: "flex",
          }}
        >
          <Button
            height="60px"
            width="120px"
            text="Aggiungi"
            textsize="20"
            onPress={() => {
              console.log(active)
              AddProduct(
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
            }}
          />
        </div>
      </Modal.Footer>
    </Modal>
    </div>
  );
}
