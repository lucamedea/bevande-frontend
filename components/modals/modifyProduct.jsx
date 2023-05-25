import React from 'react';
import { useState, useEffect } from 'react';
import { Table } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import ModificaProdotto from '../components/modals/addProduct';

function Tabella() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Effettua la richiesta API per recuperare i dati dal database
    fetch("http://bevanderia.altervista.org/bevandeapi/API/prodotto/getArchiveProducts.php")
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
        <Table.Column>Descrizione</Table.Column>
        <Table.Column>Prezzo</Table.Column>
        <Table.Column>Categoria</Table.Column>
        <Table.Column>Quantita</Table.Column>
        <Table.Column>Grassi</Table.Column>
        <Table.Column>Kcal</Table.Column>
        <Table.Column>Proteine</Table.Column>
        <Table.Column>Zuccheri</Table.Column>
        <Table.Column>Attivo</Table.Column>
        <Table.Column>Modifica</Table.Column>
      </Table.Header>
      <Table.Body>
        {data.map((item) => (
          <Table.Row>
            <Table.Cell>{item.nome}</Table.Cell>
            <Table.Cell>{item.descrizione}</Table.Cell>
            <Table.Cell>€{item.prezzo}</Table.Cell>
            <Table.Cell>{item.categoria_nome}</Table.Cell>
            <Table.Cell>{item.quantita}</Table.Cell>
            <Table.Cell>{item.Fats}</Table.Cell>
            <Table.Cell>{item.Kcal}</Table.Cell>
            <Table.Cell>{item.Proteins}</Table.Cell>
            <Table.Cell>{item.Sugars}</Table.Cell>
            <Table.Cell>{item.active == 1 ? 'Attivo' : 'Disattivo'}</Table.Cell>
            <Table.Cell><Button size="xs" onClick={() => ModificaProdotto(item)}>Modifica</Button></Table.Cell>
            </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}

export default Tabella;
