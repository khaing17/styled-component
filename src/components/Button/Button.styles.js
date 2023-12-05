import styled from "styled-components";

export const StyledButton = styled.button`
  border: 1px solid #4caf50;
  background-color: ${(porps) =>
    porps.variant === "outline" ? "#FFF" : "#4caf50"};
  color: ${(props) => (props.variant === "outline" ? "#4caf50" : "#FFF")};
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  transform: 0.5s all ease-out;
`;

export const FancyButton = styled(StyledButton)`
  background-image: linear-gradient(to right, #f6d365 0%, #fda085 100%);

  &:hover {
    background-image: linear-gradient(to right, #fda085 0%, #f6d365 100%);
  }
`;

export const SubmitButton = styled(StyledButton).attrs({
  type: "submit",
})`
  box-shadow: 0 9px #999;
  &:active {
    background-color: ${(props) =>
      props.variant === "outline" ? "#FFF" : "#4caf50"};
    box-shadow: none;
    transform: translate(4px);
  }
`;
