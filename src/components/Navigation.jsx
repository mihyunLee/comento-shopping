import styled from "styled-components";

const Navigation = () => {
  // TODO: ProductDetail 페이지일 시, 화살표 모양 추가
  return (
    <StyledNavigation>
      <span>&lt;</span>
      <h3>코멘토 쇼핑</h3>
      <span>&nbsp;</span>
    </StyledNavigation>
  );
};

const StyledNavigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    padding-left: 31px;
  }

  span:nth-child(1) {
    cursor: pointer;
    visibility: hidden;
  }

  h3 {
    font-size: 18px;
    text-align: center;
  }
`;

export default Navigation;
