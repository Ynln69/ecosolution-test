import sprite from "../../images/sprite.svg";
import { Btn } from "./Button.styled";

const Button = ({ title }) => {
  return (
    <Btn>
      {title}
      <svg width={16} height={16}>
        <use xlinkHref={`${sprite}#icon-circleArrow`}></use>
      </svg>
    </Btn>
  );
};

export default Button;
