import React, { useState, useEffect, useRef } from "react";
import Grid from "@mui/material/Grid";
import { Button, Box } from "@mui/material";
import { urso_niveis } from "../../db.js";
import "./styles.scss";

const Carta = () => {
  const gerarAleatorio = (num) => Math.floor(Math.random() * num);

  const emocaoRandom = {
    nv1: gerarAleatorio(urso_niveis?.nv1?.length || 0),
    nv2: gerarAleatorio(urso_niveis?.nv2?.length || 0),
    nv3: gerarAleatorio(urso_niveis?.nv3?.length || 0),
    nv4: gerarAleatorio(urso_niveis?.nv4?.length || 0),
    nv5: gerarAleatorio(urso_niveis?.nv5?.length || 0),
    nv6: gerarAleatorio(urso_niveis?.nv6?.length || 0),
  };

  const [countTentativa, setCountTentativa] = useState(0);
  const [emocao, setEmocao] = useState({});
  const [finished, setFinished] = useState(false);
  const [buttonPosition, setButtonPosition] = useState({ left: 0, top: 0 });

  const botaoNegativoRef = useRef(null);

  useEffect(() => {
    niveis(countTentativa);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countTentativa]);

  const fuja = () => {
    const count = countTentativa + 1;
    setCountTentativa(count);

    const botaoNegativo = botaoNegativoRef.current;

    if (botaoNegativo) {
      const x = Math.floor(
        Math.random() * (window.innerWidth - botaoNegativo.clientWidth)
      );
      const y = Math.floor(
        Math.random() * (window.innerHeight - botaoNegativo.clientHeight)
      );
      setButtonPosition({ left: x, top: y });
    }
  };

  const niveis = (count) => {
    if (count >= 18) {
      setEmocao(urso_niveis.nv6[emocaoRandom.nv6]);
      setFinished(true);
    } else if (count >= 14) {
      setEmocao(urso_niveis.nv5[emocaoRandom.nv5]);
    } else if (count >= 10) {
      setEmocao(urso_niveis.nv4[emocaoRandom.nv4]);
    } else if (count >= 6) {
      setEmocao(urso_niveis.nv3[emocaoRandom.nv3]);
    } else if (count >= 3) {
      setEmocao(urso_niveis.nv2[emocaoRandom.nv2]);
    } else {
      setEmocao(urso_niveis.nv1[emocaoRandom.nv1]);
    }
  };

  return (
    <div className={`layoutNamoro ${finished ? "bloqueio" : ""}`}>
      <div className="cardNamoro">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          style={{ height: "100%" }}
        >
          <Grid item xs={12}>
            <Box textAlign="center">
              <h1>{emocao.title}</h1>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box display="flex" alignItems="center" justifyContent="center">
              <img src={emocao.img} alt="" />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box textAlign="center">
              <h2>{emocao.message}</h2>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Grid
              container
              spacing={5}
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item xs={6}>
                <Button
                  id="sim"
                  variant="contained"
                  href="https://www.youtube.com/watch?v=HqxhfRuTs8E"
                >
                  Sim
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  id="nao"
                  ref={botaoNegativoRef}
                  disabled={finished}
                  variant="contained"
                  onMouseOver={finished ? null : fuja}
                  style={{
                    position: "absolute",
                    left: buttonPosition.left,
                    top: buttonPosition.top,
                  }}
                >
                  Não
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Carta;
