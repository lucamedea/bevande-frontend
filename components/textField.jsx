import React from "react";
import { Input } from "@nextui-org/react";
export default function TextField({
  placeholder,
  width,
  handleChange,
  label,
  initialValue,
}) {
  return (
    <Input
      style={{ width: width, borderColor:"#EBCEF5" }}
      bordered
      label={label}
      placeholder={placeholder}
      initialValue={initialValue}
      aria-label="ciao"
      onInput={handleChange}
    />
  );
}
