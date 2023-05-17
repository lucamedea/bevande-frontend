import React from 'react';
import { useState, useEffect } from 'react';
import { Table } from "@nextui-org/react";


function Tabella() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Effettua la richiesta API per recuperare i dati dal database
    fetch("http://bevanderia.altervista.org/bevandeapi/API/utente/getArchiveUsers.php")
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
        <Table.Column>Nome</Table.Column>
        <Table.Column>Cognome</Table.Column>
        <Table.Column>Email</Table.Column>
        <Table.Column>Password</Table.Column>
        <Table.Column>Telefono</Table.Column>
        <Table.Column>Data di nascita</Table.Column>
        <Table.Column>Attivo</Table.Column>
      </Table.Header>
      <Table.Body>
        {data.map((item, index) => (
          <Table.Row>
            <Table.Cell>{item.nome}</Table.Cell>
            <Table.Cell>{item.cognome}</Table.Cell>
            <Table.Cell>{item.email}</Table.Cell>
            <Table.Cell>{item.password}</Table.Cell>
            <Table.Cell>+{item.telefono}</Table.Cell>
            <Table.Cell>{item.data_nascita}</Table.Cell>
            <Table.Cell>{item.active == 1 ? 'Attivo' : 'Eliminato'}</Table.Cell>
            </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}

export default Tabella;
