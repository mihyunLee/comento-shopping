import styled from "styled-components";
import Review from "./Review";

const ProductDetailView = ({ detailImg, name, tabMenu, reviews }) => {
  return (
    <StyledProductDetailView>
      {tabMenu === 0 ? (
        <img src={detailImg} alt={name + " 상품 설명"} />
      ) : (
        reviews.map((review) => <Review key={review.id} {...review} />)
      )}
    </StyledProductDetailView>
  );
};

const StyledProductDetailView = styled.div`
  width: 100%;
  height: 825px;

  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  img {
    width: 342px;

    margin: 0 24px;

    object-fit: cover;
  }
`;

export default ProductDetailView;
