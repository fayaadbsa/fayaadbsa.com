import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const Button = styled.div`
  border-radius: 50px;
  background: #f98d36;
  white-space: nowrap;
  padding: ${({ large }) => (large ? "12px 30px" : "10px 22px")};
  color: #000;
  font-size: ${({ large }) => (large ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  background-color: #f98d36;
  background-image: linear-gradient(45deg, #f98d36, #fbe10f, #f98d36);
  background-size: 300% 100%;
  background-repeat: repeat;

  &:hover {
    transition: all 0.2s ease-in-out;
    background-position: 100% 0%;
  }
`;
