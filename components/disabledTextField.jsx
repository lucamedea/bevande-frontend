import React from "react";
import { Input } from "@nextui-org/react";
export default function TextField({
  width,
  label,
  initialValue,
}) {
  return (
    <Input
    disabled
      style={{ width: width, borderColor:"#EBCEF5"}}
      bordered
      label={label}
      initialValue={initialValue}
      aria-label="ciao"
    />
  );
}
