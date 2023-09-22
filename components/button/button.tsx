import { openContactModal } from "@/functions/modal-behavior";
import styled from "styled-components";

const ButtonStyled = styled.input<{ $primary?: boolean, $stretch?: boolean }>`
  border-color: transparent;
  border-radius: 5px;
  transition: .4s;
  font-size: 16px;

  background-color: ${props => props.$primary ? "#713336" : "#ece7e5"};
  color: ${props => props.$primary ? "#fefff7" : "#15110a"};
  padding: ${props => props.$stretch ? "7px 20px" : "10px 25px"};

  &:hover {
      cursor: pointer;
      transform: ${props => props.$stretch ? "none" : "translateY(-3px)"};
      box-shadow: ${props => props.$stretch ? "none" : "rgba(0, 0, 0, 0.2) 1px 1px 2px"};
  }

  &:active{
      transform: scale(.8);
  }
`

export default function Button({ value, primary, stretch }: { value: string, primary: boolean, stretch: boolean }) {

  return (
    <ButtonStyled type="button" value={value} $primary={primary} $stretch={stretch} onClick={value === "Contact" ? openContactModal : undefined} />
  );
}