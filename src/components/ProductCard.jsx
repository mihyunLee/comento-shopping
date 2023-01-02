import styled from "styled-components";

const ProductCard = ({ name, description, thumbnail }) => {
  return (
    <StyledProductCard>
      <ProductImg src={thumbnail} alt={name} />
      <ProductName>{name}</ProductName>
      <div>{description}</div>
    </StyledProductCard>
  );
};

const StyledProductCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  width: 342px;

  margin: 0 25px;
`;

const ProductImg = styled.img`
  width: 100%;
  height: 204px;

  object-fit: cover; /* IE는 지원하지 않음 */
`;

const ProductName = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

export default ProductCard;
