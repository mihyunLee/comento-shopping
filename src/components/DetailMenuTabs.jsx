import styled from "styled-components";

const DetailMenuTabs = ({ firstTabName, secondTabName }) => {
  return (
    <StyledDetailMenuTabs>
      <button name="button">{firstTabName}</button>
      <button name="button">{secondTabName}</button>
    </StyledDetailMenuTabs>
  );
};

const StyledDetailMenuTabs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;

  text-align: center;

  button {
    flex: 1;
    height: 48px;

    background-color: #ffffff;

    font-size: 16px;
    font-family: "Noto Sans KR";

    border: 1px solid #eeeeee;

    margin: 25px 0;

    cursor: pointer;

    &:active,
    &:focus {
      background-color: #eeeeee;
      font-weight: bold;
    }
  }
`;

export default DetailMenuTabs;
