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
     type="password"
      style={{ width: width }}
      bordered
      label={label}
      placeholder={placeholder}
      initialValue={initialValue}
      aria-label="ciao"
      onInput={handleChange}
    />
  );
}
