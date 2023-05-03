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
        <Table.Column>Id</Table.Column>
        <Table.Column>Nome</Table.Column>
        <Table.Column>Cognome</Table.Column>
        <Table.Column>Email</Table.Column>
        <Table.Column>Telefono</Table.Column>
        <Table.Column>Data di nascita</Table.Column>
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