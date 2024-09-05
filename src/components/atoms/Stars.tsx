import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const Stars = ({ stars = { rate: 0 } }) => {
  const { rate } = stars;

  const tempStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;
    return (
      <span key={index} color="ffa200">
        {rate >= index + 1 ? (
          <BsStarFill color="ffa200"/>
        ) : rate >= number ? (
          <BsStarHalf  color="ffa200" />
        ) : (
          <BsStar  color="ffa200" />
        )}
      </span>
    );
  });

  return <div className="flex">{tempStars}</div>;
};

export default Stars;
