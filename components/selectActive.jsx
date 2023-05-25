import React from "react";
import { Dropdown } from "@nextui-org/react";

export default function SelectActive({width, height,boolActive}) {
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
        Status:
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
        <Dropdown.Item key="1">Attivo</Dropdown.Item>
        <Dropdown.Item key="0">Non Attivo</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}