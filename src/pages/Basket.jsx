import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BasketItem from "../components/BasketItem";
import Navigation from "../components/Navigation";
import BasketButton from "../components/BasketButton";
import { mockTheme1Products } from "../data/mockData";
import GrayLine from "../components/GrayLine";
import PriceTable from "../components/PriceTable";

const Basket = () => {
  // FIXME: 임시 데이터이므로 삭제하기
  const [basketList, setBasketList] = useState(mockTheme1Products);

  return (
    <div>
      <Navigation header={"장바구니"} />
      <GrayLine height={1} />
      <BasketItemSection>
        {basketList.map((basketItem) => (
          <BasketItem
            key={basketItem.id}
            name={basketItem.name}
            thumbnail={basketItem.thumbnail}
            price={basketItem.price}
          />
        ))}
      </BasketItemSection>
      <BasketPriceSection>
        <PriceTable />
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
