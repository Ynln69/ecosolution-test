import styled from "@emotion/styled";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  z-index: 1;
  background: rgba(23, 61, 51, 0.25);
  backdrop-filter: blur(2px);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  overflow: auto;
`;

export const MobMenu = styled.div`
  width: 280px;
  height: 701px;
  margin: 0 auto;
  padding: 24px;
  border-radius: 25px;
  background: rgba(23, 61, 51, 0.75);
  backdrop-filter: blur(12.5px);
  @media (min-width: 768px) {
    position: absolute;
    right: 30px;
    top: 42px;
    margin: 0;
  }
  @media (min-width: 1280px) {
    right: 100px;
    top: 30px;
  }
`;

export const BtnMobile = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  gap: 4px;
  border: none;

  background: transparent;
  color: #fff;
  font-family: Fira Sans;
  font-size: 20px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.8px;
  &::after {
    display: block;
    content: "";
    width: 272px;
    background: #97d28b;
    height: 1px;
    bottom: -8px;
    position: absolute;
  }
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 48px;
`;

export const NavItem = styled.li`
  display: flex;
  gap: 8px;
`;

export const NavLink = styled.a`
  color: #fff;
  font-family: "Fira Sans", sans-serif;
  font-size: 24px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.96px;

  &:hover {
    color: #97d28b;

    > svg {
      stroke: #97d28b;
    }
  }
`;

export const NavSvg = styled.svg`
  stroke: white;
  transform: rotate(314deg);
`;

export const SocialList = styled.ul`
  position: absolute;
  bottom: 24px;
  display: flex;
  gap: 8px;
`;

export const SocialSvg = styled.svg`
  stroke: white;
  fill: white;
`;
