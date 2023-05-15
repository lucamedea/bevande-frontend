import React, { useState } from "react";
import { Modal, Text, Row, Spacer } from "@nextui-org/react";
import TextField from "../textField.jsx";
import SelectActive from "../selectActive";
import SelectCategory from "../selectCategory";
import Button from "../submitButton.jsx";

export default function AddNewProduct({ width, height, show, close }) {
  const [name, setName] = useState();
  const [active, setActive] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  const [quantity, setQuantity] = useState();
  const [category, setCategory] = useState(new Set(["1"]));
  const [kcal, setKcal] = useState();
  const [fats, setFats] = useState();
  const [carbo, setCarbo] = useState();
  const [protein, setProtein] = useState();
  const [fiber, setFiber] = useState();

  const handleText = (event) => {
    setQuantity(event.target.value);
  };

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
        Aggiungi nuovo prodotto
      </Text>
      <Modal.Body>
        <Row justify="center" xs={12}>
          <TextField
            label="Nome"
            width="300px"
            handleChange={(e) => setName(e.target.value)}
          />
          <Spacer x="4.5" />
          <TextField
            label="Prezzo(€)"
            width="300px"
            handleChange={(e) => setPrice(e.target.value)}
          />
        </Row>
        <Row justify="center" xs={12} display="flex" align="top">
          <SelectCategory
            label="Categoria"
            width="300px"
            handleChange={(e) => setCategory(e.target.value)}
          />
          <Spacer x="4.5" />
          <TextField
            label="Quantita"
            width="300px"
            handleChange={(e) => setQuantity(e.target.value)}
          />
        </Row>
        <Spacer y="0.3" />
        <Row justify="center" xs={12}>
        <SelectActive
            label="Attivo"
            width="300px"
            handleChange={(e) => setActive(e.target.value)}
          />
          <Spacer x="4.5" />
          <TextField
            label="Proteine"
            width="300px"
            handleChange={(e) => setProtein(e.target.value)}
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
            label="Carboidrati"
            width="300px"
            handleChange={(e) => setCarbo(e.target.value)}
          />  
        </Row>
        <Spacer y="0.3" />
        <Row justify="center" xs={12}>
          <TextField
            label="Fibre"
            width="300px"
            handleChange={(e) => setFiber(e.target.value)}
          />
          <Spacer x="4.5" />
          <TextField
            label="Kcal"
            width="300px"
            handleChange={(e) => setKcal(e.target.value)}
          />
          </Row>
        <Spacer y="0.3" />
        <Row justify="center" xs={12}>
          <TextField
            label="Descrizione"
            width="700px"
            handleChange={(e) => setDescription(e.target.value)}
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
              let nutritial_values = [
                kcal,
                fats,
                carbo,
                protein,
                fiber,
              ];
              addProduct(
                name,
                price,
                description,
                quantity,
                category["currentKey"],
                active,
              );
              close();
            }}
          />
        </div>
      </Modal.Footer>
    </Modal>
  );
}
