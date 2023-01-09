import styled from "styled-components";

const ProductInfo = ({ name, cost, thumbnail }) => {
  return (
    <StyledProductInfo>
      <img src={thumbnail} alt={name} />
      <span>{name}</span>
      <span>{cost}원</span>
    </StyledProductInfo>
  );
};

const StyledProductInfo = styled.div`
  display: flex;
  flex-direction: column;

  width: 390px;

  img {
    width: 100%;
    height: 420px;

    object-fit: cover; // IE는 지원하지 않음
  }

  span:nth-child(2) {
    font-size: 20px;
    font-weight: bold;

    margin-top: 25px;
    margin-bottom: 8px;
    margin-left: 24px;
    margin-right: 24px;
  }

  span:last-child {
    margin: 0 24px;
  }
`;

export default ProductInfo;
