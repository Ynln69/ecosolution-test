import styled from "@emotion/styled";

export const FooterSection = styled.footer`
  padding-top: 18px;
  padding-bottom: 24px;
  &::before {
    display: block;
    content: "";
    width: 320px;
    height: 1px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 24px;

    background: #97d28b;
    @media (min-width: 480px) {
      width: 440px;
    }
    @media (min-width: 768px) {
      width: 708px;
      margin-bottom: 40px;
    }
    @media (min-width: 1280px) {
      width: 1080px;
    }
  }
`;

export const FooterContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 24px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    gap: 87px;
    margin-bottom: 16px;
  }
  @media (min-width: 1280px) {
    gap: 270px;
  }
`;

export const ButtonUp = styled.button`
  position: absolute;
  right: 0;
  top: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-radius: 100px;
  border: none;

  background: #97d28b;
  stroke: #173d33;

  transform: rotate(270deg);
`;
