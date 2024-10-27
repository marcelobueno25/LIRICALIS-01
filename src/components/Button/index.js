import React from "react";
import { ButtonUI } from "./styles.js";

export const Button = ({ children, ...props }) => {
  return <ButtonUI {...props}>{children}</ButtonUI>;
};
