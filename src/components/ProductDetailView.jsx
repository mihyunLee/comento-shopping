import styled from "styled-components";

const ProductDetailView = ({ detailImg, name }) => {
  return (
    <StyledProductDetailView>
      {/* TODO: 메뉴 버튼 선택에 따라 보여지는 화면 다르게 하기 */}
      <img src={detailImg} alt={name + " 상품 설명"} />
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
