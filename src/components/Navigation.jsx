import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Navigation = ({ isHome = false }) => {
  const navigate = useNavigate();

  return (
    <StyledNavigation isHome={isHome}>
      <span onClick={() => navigate(-1)}>&lt;</span>
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
    visibility: ${(props) => (props.isHome ? "hidden" : "visible")};
  }

  h3 {
    font-size: 18px;
    text-align: center;
  }
`;

export default Navigation;
