import styled from "styled-components";
import background from "../../assets/background/background.png";
import backgroundBloqueio from "../../assets/bloqueio.png";

export const LayoutUI = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background-position: center;
  //background-blend-mode: color-burn;
  //background-color: rgba(0, 0, 0, 0.3);
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${background});

  &.bloqueio {
    background-color: rgb(255 0 0 / 47%);
    #nao {
      background-color: #aaa;
      cursor: default;
      &::before {
        content: "";
        position: absolute;
        top: -5px;
        left: 30%;
        display: inline-block;
        width: 45px;
        height: 45px;
        background-repeat: no-repeat;
        background-size: cover;
        background-image: url(${backgroundBloqueio});
      }
    }
  }
`;
