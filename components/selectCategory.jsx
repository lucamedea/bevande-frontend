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
        <Dropdown.Item key="1">Bibite Frizzanti</Dropdown.Item>
        <Dropdown.Item key="2">Acqua</Dropdown.Item>
        <Dropdown.Item key="3">Bibite Liscie</Dropdown.Item>
        <Dropdown.Item key="4">Energy Drink</Dropdown.Item>
        <Dropdown.Item key="5">Succhi di Frutta</Dropdown.Item>
        <Dropdown.Item key="6">Integratori</Dropdown.Item>
        <Dropdown.Item key="7">Sciroppi</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}