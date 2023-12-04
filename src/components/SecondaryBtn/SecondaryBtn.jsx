import { ButtonSvg, SecondaryButton } from "./SecondaryBtn.styled";
import sprite from "../../images/sprite.svg";

const SecondaryBtn = ({ title, onClick }) => {
  return (
    <SecondaryButton onClick={onClick}>
      {title}
      <ButtonSvg width={16} height={16}>
        <use xlinkHref={`${sprite}#icon-arrow-right`}></use>
      </ButtonSvg>
    </SecondaryButton>
  );
};

export default SecondaryBtn;
