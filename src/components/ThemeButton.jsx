import styled from "styled-components";

const ThemeButton = ({ themeName }) => {
  return <StyledThemeButton>{themeName}</StyledThemeButton>;
};

const StyledThemeButton = styled.button`
  width: 144px;
  height: 74px;

  background: rgba(0, 0, 0, 0.5);

  font-family: "Noto Sans KR";
  font-size: 20px;
  color: #ffffff;

  border: none;
  border-radius: 10px;

  cursor: pointer;
`;

export default ThemeButton;
