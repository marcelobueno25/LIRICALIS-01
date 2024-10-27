import styled from "styled-components";

export const ImageUI = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  display: block;
  border-radius: 10%;
  overflow: hidden;

  img {
    display: flex;
    display: block;
    width: 100%;
  }
`;

export const MessageUI = styled.h2`
  color: #000;
  font-size: 20px;
  //max-width: 150px;
  text-align: center;
`;
