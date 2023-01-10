import styled from "styled-components";

const DetailMenuTabs = ({ firstTabName, secondTabName, tabMenu, onClick }) => {
  return (
    <StyledDetailMenuTabs>
      <TabButton
        name="button"
        active={tabMenu === 0}
        onClick={() => onClick(0)}
      >
        {firstTabName}
      </TabButton>
      <TabButton
        name="button"
        active={tabMenu === 1}
        onClick={() => onClick(1)}
      >
        {secondTabName}
      </TabButton>
    </StyledDetailMenuTabs>
  );
};

const StyledDetailMenuTabs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;

  text-align: center;
`;

const TabButton = styled.button`
  flex: 1;
  height: 48px;

  background-color: ${(props) => (props.active ? "#eeeeee" : "#ffffff")};

  font-size: 16px;
  font-family: "Noto Sans KR";
  font-weight: ${(props) => props.active && "bold"};

  border: 1px solid #eeeeee;

  margin: 25px 0;

  cursor: pointer;
`;

export default DetailMenuTabs;
