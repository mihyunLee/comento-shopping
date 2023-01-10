import styled from "styled-components";

const Review = ({ ...review }) => {
  return (
    <StyledReview>
      <UserSection>
        <img src={review.profileImg} alt={"프로필 이미지"} />
        <span>{review.star}</span>
        <span>
          {review.user} | {review.date}
        </span>
      </UserSection>
      <ContentSection>
        <span>{review.content}</span>
      </ContentSection>
    </StyledReview>
  );
};

const StyledReview = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 341px;
  height: 84px;

  box-sizing: border-box;

  margin-bottom: 16px;
  margin-left: 24px;
  margin-right: 24px;

  padding: 5px 10px;

  background-color: #fafafa;
`;

const UserSection = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 3fr;
  grid-template-rows: repeat(2, 1fr);
  align-items: center;

  img {
    grid-row: 1/ -1;

    width: 40px;
    height: 40px;

    border-radius: 30%;
  }

  span {
    font-size: 12px;
    color: #a7a7a7;
  }
`;

const ContentSection = styled.div`
  margin-top: 5px;

  font-size: 14px;
`;

export default Review;
