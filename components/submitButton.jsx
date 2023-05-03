import { Button } from "@nextui-org/react";

const submitButton = ({ height, width, text, onPress, textSize }) => {
  return (
    <Button
      style={{
        height: height,
        width: width,
        background: "#EBCEF5",
        color: "white",
        fontWeight: "bolder",
        fontSize: textSize,
        borderRadius: "50px",
        minWidth: "0",
      }}
      onPress={onPress}
    >
      {text}
    </Button>
  );
};

export default submitButton;
