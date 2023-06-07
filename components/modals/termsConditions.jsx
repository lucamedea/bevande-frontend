import React from "react";
import { Modal, Text } from "@nextui-org/react";
import SubmitButton from '../submitButton';

export default function TermsConditions ({ width, height, show, close }){
    const [visible, setVisible] = React.useState(false);
    const handler = () => setVisible(true);
  
    const handleChange = (event) => {
      console.log(event.target.value);}
  
    const closeHandler = () => {
      setVisible(false);
      console.log("closed");}
  
  return (
    <div>
        <SubmitButton width="200px" text="Termini & Condizioni" onPress={handler}/>
     
      <Modal
        closeButton
        open={visible}
        onClose={closeHandler}
        width={width}
        style={{
          height: height,
          left: "0vw"
        }}
      >
        <Modal.Header
          style={{
            marginTop: "10vh",
          }}
        >
          <Text
            style={{
              font: "menu",
              fontSize: "34px",
              fontWeight: "bold",
            }}
          >
            Termini & Condizioni
          </Text>
        </Modal.Header>
        <Modal.Body
          style={{
            marginLeft: "8vw",
            marginRight: "8vw",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <Text
            size={20}
            style={{
              font: "menu",
              fontSize: "18px",
              fontWeight: "200",
              paddingLeft: "0.5vw",
            }}
          >
            Nel rispondere alle richieste di divulgazione dei dati, ci basiamo
            sul rispetto per la privacy e la sicurezza delle tue informazioni.
            Quando riceviamo delle richieste di divulgazione dei dati, il nostro
            team le esamina per assicurarsi che soddisfino i requisiti legali e
            le norme relative alla divulgazione dei dati di Google. Google
            Ireland Limited ha accesso e divulga dati, incluse le comunicazioni,
            in conformità con le leggi irlandesi e con le leggi europee vigenti
            in Irlanda. Per ulteriori informazioni sulle richieste di
            divulgazione dei dati che Google riceve in tutto il mondo e sulle
            nostre modalità di risposta a tali richieste, consultare il nostro
            Rapporto sulla trasparenza e le Norme sulla privacy.
          </Text>
        </Modal.Body>
        <Modal.Footer
          style={{
            justifyContent: "center",
            marginBottom: "8vh",
          }}
        >
          <SubmitButton
            text="Conferma"
            width="200px"
            height="64px"
            textSize={18}
            onPress={closeHandler}
          />
        </Modal.Footer>
      </Modal>
    </div>
  );
};

