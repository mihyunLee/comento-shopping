import styled from "styled-components";

const ProductInfo = ({ name, cost, thumbnail }) => {
  return (
    <StyledProductInfo>
      <ProductImg src={thumbnail} alt={name} />
      <ProductName>{name}</ProductName>
      <ProductCost>{cost}원</ProductCost>
    </StyledProductInfo>
  );
};

const StyledProductInfo = styled.div`
  display: flex;
  flex-direction: column;

  width: 390px;
`;

const ProductImg = styled.img`
  width: 100%;
  height: 420px;

  object-fit: cover; // IE는 지원하지 않음
`;

const ProductName = styled.div`
  font-size: 20px;
  font-weight: bold;

  margin-top: 25px;
  margin-bottom: 8px;
  margin-left: 24px;
  margin-right: 24px;
`;

const ProductCost = styled.div`
  margin: 0 24px;
`;

export default ProductInfo;
