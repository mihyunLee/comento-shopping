import styled from "styled-components";

const ProductCard = ({ name, description, thumbnail, onClick }) => {
  return (
    <StyledProductCard onClick={onClick}>
      <img src={thumbnail} alt={name} />
      <span>{name}</span>
      <span>{description}</span>
    </StyledProductCard>
  );
};

const StyledProductCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  width: 342px;

  margin: 0 25px;

  img {
    width: 100%;
    height: 204px;

    object-fit: cover; /* IE는 지원하지 않음 */
  }

  span:nth-child(2) {
    font-size: 20px;
    font-weight: bold;
  }
`;

export default ProductCard;
