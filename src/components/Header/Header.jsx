import useWindowSize from "hooks/useWindowSize";
import { HeaderContainer, BtnBox, BtnMenu } from "./Header.styled";
import sprite from "../../images/sprite.svg";
import Button from "components/Button/Button";

const Header = () => {
  const { width } = useWindowSize();
  return (
    <HeaderContainer>
      <a href="https://Ynln69.github.io/ecosolution-test/">
        <svg width={269} height={40}>
          <use xlinkHref={`${sprite}#icon-logo`}></use>
        </svg>
      </a>
      <BtnBox>
        <BtnMenu>
          <svg width={16} height={16}>
            <use xlinkHref={`${sprite}#icon-menu`}></use>
          </svg>
        </BtnMenu>
        {width >= 768 && <Button title="Get in touch" />}
      </BtnBox>
    </HeaderContainer>
  );
};

export default Header;
