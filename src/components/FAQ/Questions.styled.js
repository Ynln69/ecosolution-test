import styled from "@emotion/styled";

export const FqaContainer = styled.div`
  @media (min-width: 768px) {
    position: relative;
  }
`;

export const FqaTitle = styled.div`
  margin-bottom: 24px;
  margin-right: auto;
  margin-left: auto;
  @media (min-width: 768px) {
    position: absolute;
    right: 0;
    top: -6px;
  }
`;

export const FqaList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    align-items: flex-start;
  }
`;
export const FqaItem = styled.li`
  position: relative;
  display: flex;
  align-items: baseline;
  gap: 8px;
  &::before {
    display: block;
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    top: 0;

    background: #97d28b;
  }
  @media (min-width: 480px) {
    width: 320px;
  }
  @media (min-width: 768px) {
    width: 342px;
  }
  @media (min-width: 1280px) {
    width: 596px;
  }
`;
export const ItemButton = styled.button`
  background: transparent;
  border: none;
  > svg {
    width: 16px;
    height: 16px;
    @media (min-width: 768px) {
      width: 28px;
      height: 28px;
    }
  }
`;
export const ItemTitle = styled.h3`
  margin-top: 16px;
  margin-bottom: 16px;

  color: #173d33;
  text-align: justify;
  font-family: Fira Sans;
  font-size: 18px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.72px;

  @media (min-width: 1280px) {
    margin-top: 24px;
    margin-bottom: 24px;

    font-size: 24px;
    letter-spacing: -0.96px;
  }
`;
export const ItemText = styled.p`
  margin-bottom: 16px;

  color: #173d33;
  text-align: justify;
  font-family: Fira Sans;
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.56px;
  @media (min-width: 1280px) {
    margin-bottom: 24px;

    font-size: 16px;
    letter-spacing: -0.64px;
  }
`;
export const FqaBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (min-width: 768px) {
    position: absolute;
    bottom: 20px;
    right: 40px;
  }
  @media (min-width: 1280px) {
    right: 0px;
  }
`;
export const FqaText = styled.p`
  margin-bottom: 12px;

  color: #173d33;
  text-align: justify;
  font-family: Fira Sans;
  font-size: 18px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.72px;

  @media (min-width: 1280px) {
    font-size: 24px;
    letter-spacing: -0.96px;
  }
`;
