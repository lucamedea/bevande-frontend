import React from 'react';
import { useState, useEffect } from 'react';
import { Table } from "@nextui-org/react";


function Tabella() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Effettua la richiesta API per recuperare i dati dal database
    fetch("http://bevanderia.altervista.org/bevandeapi/API/ordine/getArchiveOrders.php")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setData(data);
      })
      .catch(error => {
        console.error('Errore nella richiesta:', error);
      });
  }, []);

  return (
    <Table
    aria-label="Example static collection table"
    css={{
      height: "auto",
      minWidth: "100%",
    }}
    selectionMode="single"
  >
<Table.Header>
        <Table.Column>Numero ordine</Table.Column>
        <Table.Column>Data e ora</Table.Column>
        <Table.Column>Totale</Table.Column>
        <Table.Column>Nome cliente</Table.Column>
        <Table.Column>Cognome cliente</Table.Column>
        <Table.Column>Email</Table.Column>
        <Table.Column>Telefono</Table.Column>
        <Table.Column>Ritiro</Table.Column>
        <Table.Column>Prodotti</Table.Column>
      </Table.Header>
      <Table.Body>
        {data.map((item) => (
          <Table.Row>
            <Table.Cell>{item.id}</Table.Cell>
            <Table.Cell>{item.data_ora}</Table.Cell>
            <Table.Cell>€{item.totale}</Table.Cell>
            <Table.Cell>{item.nome_user}</Table.Cell>
            <Table.Cell>{item.cognome}</Table.Cell>
            <Table.Cell>{item.email}</Table.Cell>
            <Table.Cell>+{item.telefono}</Table.Cell>
            <Table.Cell>{item.ritiro}</Table.Cell>
            <Table.Cell>
              <ul>
                {item.prodotti.map((prodotto, index) => (
                  <li key={index}>{prodotto.nome}</li>
                ))}
              </ul>
            </Table.Cell>
            </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}

export default Tabella;
