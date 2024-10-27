import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import PedidoNamoro from "./pages/PedidoNamoro";
import Carta from "./pages/Carta";
import Layout from "./pages/Layout";
import { GlobalProvider } from "./Context/GlobalContext";

const Router = () => {
  return (
    <GlobalProvider>
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PedidoNamoro />} exact />
            <Route path="/" element={<Carta />} exact />
          </Routes>
        </BrowserRouter>
      </Layout>
    </GlobalProvider>
  );
};

export default Router;
