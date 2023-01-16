import React from "react";
import styled from "styled-components";
import GrayLine from "./GrayLine";

const BasketItem = ({ name, thumbnail, price }) => {
  return (
    <>
      <StyledBasketItem>
        <BasketProduct>
          <img src={thumbnail} alt={name} />
          <span>{name}</span>
          <button>x</button>
          <span>{price.toLocaleString()}원</span>
        </BasketProduct>
        <GrayLine height={1} />
      </StyledBasketItem>
    </>
  );
};

const StyledBasketItem = styled.div`
  width: 342px;
  height: 132px;
`;

const BasketProduct = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 3fr 0.5fr;
  grid-template-rows: repeat(2, 1fr);
  gap: 16px;

  height: 100px;

  margin: 30px 0px;

  img {
    grid-row: 1/ -1;

    width: 120px;
    height: 100%;

    object-fit: cover;
  }

  span:nth-child(2) {
    font-weight: bold;
  }

  span:last-child {
    align-self: flex-end;
  }

  button {
    background-color: transparent;

    border: none;

    font-size: 20px;
    font-weight: bold;

    cursor: pointer;
  }
`;

export default BasketItem;
