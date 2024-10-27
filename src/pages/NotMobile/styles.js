import styled from "styled-components";
import background from "../../assets/background/papel1.png";

export const NotMobileUI = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-position: top;
  background-blend-mode: color-burn;
  background-color: rgba(0, 0, 0, 0.7);
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${background});
  text-align: center;
  font-weight: bold;

  h1 {
    font-size: 25px;
    color: #ffff;
  }

  h2 {
    font-size: 20px;
    color: #d0d4ff;
  }

  img {
    margin-top: 2em;
    height: 11em;
  }
`;
