import SocialList from "components/SocialList/SocialList";

import { FooterContent, ButtonUp, FooterSection } from "./Footer.styled";
import { Container } from "css/base.styled";
import { MainBox } from "components/Main/Main.styled";

import sprite from "../../images/sprite.svg";

const Footer = () => {
  const socialSvgColor = "#173D33";

  const scrollToContacts = () => {
    const contactsSection = document.getElementById("main");
    if (contactsSection) {
      contactsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <FooterSection>
      <Container>
        <FooterContent>
          <a href="https://Ynln69.github.io/ecosolution-test/">
            <svg width={269} height={40}>
              <use xlinkHref={`${sprite}#icon-logo`}></use>
            </svg>
          </a>
          <ButtonUp onClick={scrollToContacts} type="button">
            <svg width={16} height={16}>
              <use xlinkHref={`${sprite}#icon-arrow-right`}></use>
            </svg>
          </ButtonUp>
          <SocialList socialSvgColor={socialSvgColor} />
        </FooterContent>
        <MainBox>
          <p>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</p>
          <p>office@ecosolution.com</p>
          <p>ecosolution © 2023</p>
        </MainBox>
      </Container>
    </FooterSection>
  );
};

export default Footer;
