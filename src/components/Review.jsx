const Review = ({ ...review }) => {
  return (
    <div>
      <div>
        <img src={review.profileImg} alt={"프로필 이미지"} />
        <div>
          <span>{review.star}</span>
          <span>{review.user}</span>
          <span>{review.date}</span>
        </div>
      </div>
      <div>{review.content}</div>
    </div>
  );
};

export default Review;
