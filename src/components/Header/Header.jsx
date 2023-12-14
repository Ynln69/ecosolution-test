import { useState } from "react";
import useWindowSize from "hooks/useWindowSize";

import Button from "components/Button/Button";
import MobileMenu from "components/MobileMenu/MobileMenu";

import sprite from "../../images/sprite.svg";

import { Container } from "css/base.styled";
import {
  HeaderContainer,
  HeaderSection,
  BtnBox,
  BtnMenu,
} from "./Header.styled";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { width } = useWindowSize();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToContacts = () => {
    const contactsSection = document.getElementById("contacts");
    if (contactsSection) {
      contactsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <HeaderSection>
      <Container>
        <HeaderContainer>
          <a href="https://Ynln69.github.io/ecosolution-test/">
            <svg width={269} height={40}>
              <use xlinkHref={`${sprite}#icon-logo`}></use>
            </svg>
          </a>
          <BtnBox>
            <BtnMenu onClick={toggleMobileMenu}>
              <svg width={16} height={16}>
                <use xlinkHref={`${sprite}#icon-menu`}></use>
              </svg>
            </BtnMenu>
            {width >= 768 && (
              <Button title="Get in touch" onClick={scrollToContacts} />
            )}
          </BtnBox>
          {isMobileMenuOpen && (
            <MobileMenu onClose={() => setMobileMenuOpen(false)} />
          )}
        </HeaderContainer>
      </Container>
    </HeaderSection>
  );
};

export default Header;
