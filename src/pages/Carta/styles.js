import styled from "styled-components";

export const ImageUI = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  border-radius: 10%;
  overflow: hidden;
  border: 1px solid #aaa;
  background-color: #eee;

  img {
    display: block;
    width: 130px;
  }
`;

export const MessageUI = styled.h2`
  color: #000;
  font-size: 20px;
  max-width: 200px;
  text-align: left;

  span {
    color: #ff6f56 !important;
    font-weight: bold;
  }
`;

export const ParagrafoUI = styled.p`
  color: #000;
  font-size: 18px;
  text-align: center;
  font-weight: 200;
`;
