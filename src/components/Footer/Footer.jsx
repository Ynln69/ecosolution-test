import { MainBox } from "components/Main/Main.styled";
import sprite from "../../images/sprite.svg";
import {
  FooterContent,
  ButtonUp,
  FooterSection,
  SocialList,
  SocialSvg,
} from "./Footer.styled";

const Footer = () => {
  const scrollToContacts = () => {
    const contactsSection = document.getElementById("main");
    if (contactsSection) {
      contactsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <FooterSection>
      <FooterContent>
        <a href="https://Ynln69.github.io/ecosolution-test/">
          <svg width={269} height={40}>
            <use xlinkHref={`${sprite}#icon-logo`}></use>
          </svg>
        </a>
        <SocialList>
          <li>
            <a href="https://www.facebook.com">
              <SocialSvg width={24} height={24}>
                <use xlinkHref={`${sprite}#icon-facebook`}></use>
              </SocialSvg>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/">
              <SocialSvg width={24} height={24}>
                <use xlinkHref={`${sprite}#icon-instagram`}></use>
              </SocialSvg>
            </a>
          </li>
        </SocialList>
        <ButtonUp onClick={scrollToContacts}>
          <svg width={16} height={16}>
            <use xlinkHref={`${sprite}#icon-arrow-right`}></use>
          </svg>
        </ButtonUp>
      </FooterContent>

      <MainBox>
        <p>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</p>
        <p>office@ecosolution.com</p>
        <p>ecosolution © 2023</p>
      </MainBox>
    </FooterSection>
  );
};

export default Footer;
