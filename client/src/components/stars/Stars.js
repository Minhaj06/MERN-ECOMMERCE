import { AiFillStar } from "react-icons/ai";

const Stars = ({ size }) => {
  return (
    <>
      <AiFillStar size={size} style={{ color: "#FDCC0D" }} />
      <AiFillStar size={size} style={{ color: "#FDCC0D" }} />
      <AiFillStar size={size} style={{ color: "#FDCC0D" }} />
      <AiFillStar size={size} style={{ color: "#FDCC0D" }} />
      <AiFillStar size={size} style={{ color: "#FDCC0D" }} />
    </>
  );
};

export default Stars;
