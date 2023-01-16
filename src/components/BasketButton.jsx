import styled from "styled-components";

const BasketButton = ({ text, onClick }) => {
  return <StyledBasketButton onClick={onClick}>{text}</StyledBasketButton>;
};

const StyledBasketButton = styled.button`
  width: 100%;
  height: 70px;

  font-family: "Noto Sans KR";
  font-weight: bold;
  font-size: 16px;
  text-align: center;

  background-color: #24dbaf;

  border: none;

  cursor: pointer;
`;

export default BasketButton;
