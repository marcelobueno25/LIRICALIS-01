import React from "react";
import { NotMobileUI } from "./styles.js";

const NotMobile = () => {
  return (
    <NotMobileUI>
      <h1>ACESSO BLOQUEADO</h1>
      <h1>PARA DISPOSITIVOS MÓVEIS</h1>
      <h2>Acesso apenas pelo computador</h2>
      <img src="./images/nv4/4.gif" alt="" />
    </NotMobileUI>
  );
};

export default NotMobile;
