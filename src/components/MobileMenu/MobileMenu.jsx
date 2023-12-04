import ReactDOM from "react-dom";
import React, { useEffect } from "react";

import sprite from "../../images/sprite.svg";
import {
  Backdrop,
  MobMenu,
  BtnMobile,
  NavList,
  NavItem,
  NavLink,
  NavSvg,
  SocialList,
  SocialSvg,
} from "./MobileMenu.styled";

const MobileMenu = ({ onClose }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "visible";
    };
  }, []);

  const handleLinkClick = (sectionId) => {
    onClose(sectionId);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return ReactDOM.createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <MobMenu>
        <BtnMobile onClick={() => onClose()}>
          <svg width={20} height={20}>
            <use xlinkHref={`${sprite}#icon-close`} />
          </svg>
          close
        </BtnMobile>
        <NavList>
          <NavItem>
            <NavLink href="#main" onClick={() => handleLinkClick("main")}>
              Main{" "}
              <NavSvg width={16} height={16}>
                <use xlinkHref={`${sprite}#icon-arrow-right`}></use>
              </NavSvg>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#about" onClick={handleLinkClick}>
              About{" "}
              <NavSvg width={16} height={16}>
                <use xlinkHref={`${sprite}#icon-arrow-right`}></use>
              </NavSvg>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#cases" onClick={handleLinkClick}>
              Cases{" "}
              <NavSvg width={16} height={16}>
                <use xlinkHref={`${sprite}#icon-arrow-right`}></use>
              </NavSvg>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#questions" onClick={handleLinkClick}>
              FQA{" "}
              <NavSvg width={16} height={16}>
                <use xlinkHref={`${sprite}#icon-arrow-right`}></use>
              </NavSvg>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#contacts" onClick={handleLinkClick}>
              Contacts us{" "}
              <NavSvg width={16} height={16}>
                <use xlinkHref={`${sprite}#icon-arrow-right`}></use>
              </NavSvg>
            </NavLink>
          </NavItem>
        </NavList>
        <SocialList>
          <li>
            <NavLink href="https://www.facebook.com">
              <SocialSvg width={24} height={24}>
                <use xlinkHref={`${sprite}#icon-facebook`}></use>
              </SocialSvg>
            </NavLink>
          </li>
          <li>
            <NavLink href="https://www.instagram.com/">
              <SocialSvg width={24} height={24}>
                <use xlinkHref={`${sprite}#icon-instagram`}></use>
              </SocialSvg>
            </NavLink>
          </li>
        </SocialList>
      </MobMenu>
    </Backdrop>,
    document.getElementById("modal-root")
  );
};
export default MobileMenu;
