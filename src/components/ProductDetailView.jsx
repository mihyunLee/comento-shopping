import styled from "styled-components";
import Review from "./Review";

const ProductDetailView = ({ detailImg, name, tabMenu, reviews }) => {
  return (
    <StyledProductDetailView tabMenu={tabMenu}>
      {tabMenu === 0 ? (
        <DetailImg src={detailImg} alt={name + " 상품 설명"} />
      ) : reviews.length > 0 ? (
        reviews.map((review) => <Review key={review.id} {...review} />)
      ) : (
        <div>작성된 리뷰가 없습니다.</div>
      )}
    </StyledProductDetailView>
  );
};

const StyledProductDetailView = styled.div`
  height: ${(props) => (props.tabMenu === 0 ? "825px" : "330px")};

  margin: 0 24px;

  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const DetailImg = styled.img`
  width: 342px;

  object-fit: cover;
`;

export default ProductDetailView;
