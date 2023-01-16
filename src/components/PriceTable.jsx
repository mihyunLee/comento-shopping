import React from "react";
import styled from "styled-components";

const PriceTable = ({ count, price }) => {
  return (
    <StyledPriceTable>
      <div>
        <span>상품금액 ({count}개)</span>
        <span>{price.toLocaleString()}원</span>
      </div>
      <div>
        <span>배송비</span>
        <span>0원</span>
      </div>
      <div>
        <span>총 주문금액</span>
        <span>{price.toLocaleString()}원</span>
      </div>
    </StyledPriceTable>
  );
};

const StyledPriceTable = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  div {
    display: flex;
    justify-content: space-between;
  }

  div:nth-child(3) > span:nth-child(2) {
    color: #ff5c5c;
    font-weight: bold;
  }

  span:nth-child(1) {
    color: #616161;
  }
`;

export default PriceTable;
