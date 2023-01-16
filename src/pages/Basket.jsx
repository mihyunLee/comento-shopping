import React, { useState, useEffect } from "react";
import styled from "styled-components";
import BasketItem from "../components/BasketItem";
import Navigation from "../components/Navigation";
import BasketButton from "../components/BasketButton";
import GrayLine from "../components/GrayLine";
import PriceTable from "../components/PriceTable";
import * as webStorage from "../utils/webStorage";

const Basket = () => {
  const [basketItems, setBasketItems] = useState();
  const [basketItemCount, setBasketItemCount] = useState(0);
  const [basketItemPrice, setBasketItemPrice] = useState(0);

  useEffect(() => {
    const items = webStorage.getBasketItems();
    const totalPrice = items
      .map((item) => item.price)
      .reduce((acc, val) => acc + val, 0);
    setBasketItems(items);
    setBasketItemCount(items.length);
    setBasketItemPrice(totalPrice);
  }, []);

  useEffect(() => {
    const items = webStorage.getBasketItems();
    const totalPrice = items
      .map((item) => item.price)
      .reduce((acc, val) => acc + val, 0);
    setBasketItems(items);
    setBasketItemPrice(totalPrice);
  }, [basketItemCount]);

  const handleRemoveButtonClick = (productId) => {
    webStorage.removeBasketItem(productId);
    setBasketItemCount(basketItems.length - 1);
  };

  return (
    <div>
      <Navigation header={"장바구니"} />
      <GrayLine height={1} />
      <BasketItemSection>
        {basketItems &&
          basketItems.map((basketItem) => (
            <BasketItem
              key={basketItem.id}
              name={basketItem.name}
              thumbnail={basketItem.thumbnail}
              price={basketItem.price}
              onRemoveButtonClick={() => handleRemoveButtonClick(basketItem.id)}
            />
          ))}
      </BasketItemSection>
      <BasketPriceSection>
        <PriceTable count={basketItemCount} price={basketItemPrice} />
      </BasketPriceSection>
      <BasketButton text={"주문하기"} />
    </div>
  );
};

const BasketItemSection = styled.div`
  height: 600px;

  margin: 0 24px;

  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const BasketPriceSection = styled.div`
  margin: 24px;
`;

export default Basket;
