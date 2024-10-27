/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Grid from "@mui/material/Grid2";
import { Card } from "../../components/Card";
import { MessageUI, ParagrafoUI } from "./styles.js";

const Carta = () => {
  return (
    <Grid container direction="column" spacing={1}>
      <Grid item size={12}>
        <Card>
          <Grid
            container
            spacing={2}
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Grid xs={12}>
              <MessageUI>
                Sabrina <span>&</span> Marcelo
              </MessageUI>
            </Grid>
            <Grid item xs={12}>
              <ParagrafoUI>
                Certifique-se de que não há múltiplas versões do Sass instaladas
                que possam estar causando conflitos. Você pode usar o seguinte
                comando para verificar as versões instaladas. Informações
                Adicionais: Por que usar o sass em vez do node-sass? O sass é a
                implementação oficial em Dart do Sass e é mais rápida e
                atualizada com os recursos mais recentes. O node-sass depende da
                biblioteca LibSass, que não está mais sendo mantida. Sobre a
                Depreciação: A mensagem de depreciação é um aviso antecipando
                mudanças futuras. Embora seu código possa continuar funcionando
                agora, é importante atualizar para evitar problemas quando o
                Dart Sass 2.0.0 for lançado. Link para Mais Informações: Você
                pode ler mais sobre essa depreciação e como migrar no link
                fornecido na mensagem de erro:
              </ParagrafoUI>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Carta;
