import { Table } from "@nextui-org/react";

export default function App() {
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
        <Table.Column>Bibita</Table.Column>
        <Table.Column>Categoria</Table.Column>
        <Table.Column>Quantità</Table.Column>
        <Table.Column>Prezzo</Table.Column>
        <Table.Column>Attivo</Table.Column>
        <Table.Column>Descrizione</Table.Column>
      </Table.Header>
      <Table.Body>
        <Table.Row key="1">
          <Table.Cell>Tony Reichert</Table.Cell>
          <Table.Cell>CEO</Table.Cell>
          <Table.Cell>Active</Table.Cell>
          <Table.Cell>Active</Table.Cell>
          <Table.Cell>Active</Table.Cell>
          <Table.Cell>Active</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
}