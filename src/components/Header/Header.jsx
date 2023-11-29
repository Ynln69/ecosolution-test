import React, { useState, useEffect } from "react";
import { HeaderContainer, BtnBox, BtnMenu, BtnGet } from "./Header.styled";

import { ReactComponent as LogoIcon } from "../../images/logo.svg";
import { ReactComponent as MenuIcon } from "../../images/menu.svg";
import { ReactComponent as Circle } from "../../images/circleArrow.svg";

const Header = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setShowButton(window.innerWidth >= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <HeaderContainer>
      <a href="https://Ynln69.github.io/ecosolution-test/">
        <LogoIcon width="269" height="40" />
      </a>
      <BtnBox>
        <BtnMenu>
          <MenuIcon width="16" height="16" />
        </BtnMenu>
        {showButton && (
          <BtnGet>
            Get in touch <Circle width="16" height="16" />{" "}
          </BtnGet>
        )}
      </BtnBox>
    </HeaderContainer>
  );
};

export default Header;
