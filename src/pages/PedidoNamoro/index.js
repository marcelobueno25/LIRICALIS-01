/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid2";
import { urso_niveis } from "../../db.js";
import { Card } from "../../components/Card";
import { Button } from "../../components/Button/index.js";
import { useGlobalContext } from "../../Context/GlobalContext.js";
import { ImageUI, MessageUI } from "./styles.js";
import ConfettiExplosion from "react-confetti-explosion";

const PedidoNamoro = () => {
  const [isExploding, setIsExploding] = useState(false);

  const { globalVariable, setGlobalVariable } = useGlobalContext();

  const gerarAleatorio = (num) => Math.floor(Math.random() * num);
  const initRandom = {
    nv1: 0,
    nv2: 0,
    nv3: 0,
    nv4: 0,
    nv5: 0,
    nv6: 0,
  };
  const [countTentativa, setCountTentativa] = useState(0);
  const [emocao, setEmocao] = useState([]);
  const [emocaoRandom, setEmocaoRandom] = useState(initRandom);

  useEffect(() => {
    setEmocaoRandom({
      nv1: gerarAleatorio(urso_niveis?.nv1?.length),
      nv2: gerarAleatorio(urso_niveis?.nv2?.length),
      nv3: gerarAleatorio(urso_niveis?.nv3?.length),
      nv4: gerarAleatorio(urso_niveis?.nv4?.length),
      nv5: gerarAleatorio(urso_niveis?.nv5?.length),
      nv6: gerarAleatorio(urso_niveis?.nv6?.length),
    });
  }, []);

  useEffect(() => {
    niveis();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [emocaoRandom]);

  const fuja = () => {
    let count = countTentativa + 1;
    setCountTentativa(count);
    niveis(count);
    const botaoNegativo = document.getElementById("nao");
    const x = Math.floor(
      Math.random() * (window.innerWidth - botaoNegativo.clientWidth)
    );
    const y = Math.floor(
      Math.random() * (window.innerHeight - botaoNegativo.clientHeight)
    );

    botaoNegativo.style.position = "absolute";
    botaoNegativo.style.left = `${x}px`;
    botaoNegativo.style.top = `${y}px`;
  };

  const niveis = (count) => {
    console.log(count);
    setEmocao(urso_niveis.nv1[emocaoRandom.nv1]);
    if (count >= 2 && count < 5) {
      setEmocao(urso_niveis.nv2[emocaoRandom.nv2]);
    }
    if (count >= 5 && count < 8) {
      setEmocao(urso_niveis.nv3[emocaoRandom.nv3]);
    }
    if (count >= 8 && count < 13) {
      setEmocao(urso_niveis.nv4[emocaoRandom.nv4]);
    }
    if (count >= 13 && count < 16) {
      setEmocao(urso_niveis.nv5[emocaoRandom.nv5]);
    }
    if (count >= 16) {
      setEmocao(urso_niveis.nv6[emocaoRandom.nv6]);
      setGlobalVariable({ ...globalVariable, bloqueio: true });
    }
  };

  return (
    <Grid container direction="column" spacing={1}>
      <Grid item size={12}>
        <Card>
          <Grid
            container
            spacing={5}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid xs={12}>
              <MessageUI>
                Sabrina <span>&</span> Marcelo
              </MessageUI>
            </Grid>
          </Grid>
        </Card>
      </Grid>

      <Grid item size={12}>
        <Card>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={3}
          >
            <Grid item xs={6}>
              <ImageUI>
                <img src={emocao.img} alt="" />
              </ImageUI>
            </Grid>
            <Grid item xs={6}>
              <MessageUI>{emocao.message}</MessageUI>
            </Grid>
          </Grid>
        </Card>
      </Grid>

      <Grid item size={12}>
        <Card>
          <Grid
            container
            spacing={5}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid xs={6}>
              <Button
                id="sim"
                onClick={() => {
                  setIsExploding(!isExploding);
                  setTimeout(function () {
                    window.location.href =
                      "https://www.youtube.com/watch?v=HqxhfRuTs8E";
                  }, 1000);
                }}
                disabled={isExploding}
              >
                Sim
                {isExploding && (
                  <ConfettiExplosion
                    force={0.6}
                    duration={2200}
                    particleCount={100}
                    width={900}
                  />
                )}
              </Button>
            </Grid>
            <Grid xs={6}>
              <Button
                id="nao"
                disabled={globalVariable.bloqueio}
                onMouseOver={globalVariable.bloqueio ? null : fuja}
              >
                Não
              </Button>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
};

export default PedidoNamoro;
