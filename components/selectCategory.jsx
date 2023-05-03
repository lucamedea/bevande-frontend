import React from "react";
import { Dropdown } from "@nextui-org/react";

export default function SelectCategory({width, height,boolActive}) {
  const [selected, setSelected] = React.useState(new Set([boolActive]));

  const selectedValue = React.useMemo(
    () => Array.from(selected).join(", ").replaceAll("_", " "),
    [selected]
  );

  return (
    <Dropdown>
      <Dropdown.Button flat color="purple" 
      css={{ tt: "capitalize", width:width, height:height, background:"white", borderColor:"#EBCEF5", borderRadius:"9px"}}
       bordered borderWeight="light">
        Categoria:
        {selectedValue}
      </Dropdown.Button>
      <Dropdown.Menu
        aria-label="Single selection actions"
        color="white"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selected}
        onSelectionChange={setSelected}
      >
        <Dropdown.Item key="Bibite Frizzanti">Bibite Frizzanti</Dropdown.Item>
        <Dropdown.Item key="Acqua">Acqua</Dropdown.Item>
        <Dropdown.Item key="Bibite Lisce">Bibite Liscie</Dropdown.Item>
        <Dropdown.Item key="Energy Drink">Energy Drink</Dropdown.Item>
        <Dropdown.Item key="Succhi di Frutta">Succhi di Frutta</Dropdown.Item>
        <Dropdown.Item key="Integratori">Integratori</Dropdown.Item>
        <Dropdown.Item key="Sciroppi">Sciroppi</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}