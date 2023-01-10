import styled from "styled-components";
import Review from "./Review";

const ProductDetailView = ({ detailImg, name, tabMenu, reviews }) => {
  return (
    <StyledProductDetailView tabMenu={tabMenu}>
      {tabMenu === 0 ? (
        <DetailImg src={detailImg} alt={name + " 상품 설명"} />
      ) : (
        reviews.map((review) => <Review key={review.id} {...review} />)
      )}
    </StyledProductDetailView>
  );
};

const StyledProductDetailView = styled.div`
  width: 100%;
  height: ${(props) => (props.tabMenu === 0 ? "825px" : "330px")};

  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const DetailImg = styled.img`
  width: 342px;

  margin: 0 24px;

  object-fit: cover;
`;

export default ProductDetailView;
