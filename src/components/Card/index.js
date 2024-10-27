import React from "react";
import { CardUI } from "./styles.js";

export const Card = ({ children, width, height }) => {
  return (
    <CardUI
      style={{
        width: width ? width : 400,
      }}
    >
      {children}
    </CardUI>
  );
};
