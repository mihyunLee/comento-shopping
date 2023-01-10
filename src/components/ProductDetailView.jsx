import styled from "styled-components";

const ProductDetailView = ({ detailImg, name, tabMenu }) => {
  return (
    <StyledProductDetailView>
      {tabMenu === 0 ? (
        <img src={detailImg} alt={name + " 상품 설명"} />
      ) : (
        <div>상품 후기 화면입니다.</div>
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
