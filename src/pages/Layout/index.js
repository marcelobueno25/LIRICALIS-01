import React from "react";
import { useGlobalContext } from "../../Context/GlobalContext.js";
import { LayoutUI } from "./styles.js";

const Layout = ({ children }) => {
  const { globalVariable } = useGlobalContext();
  return (
    <LayoutUI className={`layout ${globalVariable.bloqueio ? "bloqueio" : ""}`}>
      {children}
    </LayoutUI>
  );
};

export default Layout;
