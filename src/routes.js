import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import PedidoNamoro from "./pages/PedidoNamoro";
import Carta from "./pages/Carta";
import Layout from "./pages/Layout";

const Router = () => {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PedidoNamoro />} exact />
          <Route path="/" element={<Carta />} exact />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
};

export default Router;
