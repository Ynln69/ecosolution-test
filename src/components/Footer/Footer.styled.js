import styled from "@emotion/styled";

export const FooterSection = styled.footer`
  position: relative;
  margin-bottom: 24px;
  &::before {
    display: block;
    content: "";
    background: #97d28b;
    height: 1px;
    margin-bottom: 24px;
    @media (min-width: 768px) {
      margin-bottom: 40px;
    }
  }
  @media (min-width: 768px) {
    margin-bottom: 40px;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    justify-content: space-between;
  }
`;

export const ButtonUp = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-radius: 100px;
  border: none;
  stroke: #173d33;
  transform: rotate(270deg);
  background: #97d28b;
`;

export const SocialList = styled.ul`
  display: flex;
  gap: 8px;
  justify-content: center;
`;

export const SocialSvg = styled.svg`
  stroke: #173d33;
`;
