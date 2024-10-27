import React from "react";
import { CardUI } from "./styles.js";

export const Card = ({ children, width, height }) => {
  return (
    <CardUI
      style={{
        maxWidth: width ? width : 600,
        maxHeight: height ? height : 400,
      }}
    >
      {children}
    </CardUI>
  );
};
