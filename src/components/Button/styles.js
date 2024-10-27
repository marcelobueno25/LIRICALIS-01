import styled from "styled-components";

export const ButtonUI = styled.button`
  cursor: pointer;
  padding: 7px 40px;
  border-radius: 10px;
  border: none;
  font-weight: bold;
  color: #fff;
  transition: all 0.4s;
  box-shadow: 0px 2px 8px -4px #111;
  font-size: 18px;

  &#nao {
    background-color: #ff6f56;
  }

  &#sim {
    background-color: #41c59f;
  }

  &:hover {
    filter: opacity(0.5);
  }
`;
