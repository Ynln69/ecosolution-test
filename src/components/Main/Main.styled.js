import styled from "@emotion/styled";

export const MainSection = styled.section`
  padding-top: 146px;
`;

export const MainContainer = styled.div`
  margin-bottom: 24px;
  &::after {
    display: block;
    content: "";
    width: 320px;
    background: #97d28b;
    height: 1px;
    margin: 0 auto;

    @media (min-width: 768px) {
      position: absolute;
      bottom: 0;
      width: 100%;
    }
  }
  @media (min-width: 768px) {
    position: relative;
    display: flex;
    justify-content: space-between;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
  @media (min-width: 768px) {
    align-items: flex-start;
  }
`;

export const Title = styled.h1`
  margin-bottom: 24px;

  color: #173d33;
  font-family: Oswald;
  font-size: 36px;
  font-weight: 400;
  line-height: 36px;
  text-transform: uppercase;
  @media (min-width: 480px) {
    width: 320px;
    margin-right: auto;
    margin-left: auto;
  }
  @media (min-width: 768px) {
    width: 300px;
    font-size: 48px;
    line-height: 48px;
    margin-right: 0;
    margin-left: 0;
  }
  @media (min-width: 1280px) {
    width: 485px;
    font-size: 64px;
    line-height: 64px;
  }
`;

export const Text = styled.p`
  color: #173d33;
  text-align: justify;
  font-family: Fira Sans;
  font-size: 17px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;
  @media (min-width: 480px) {
    width: 320px;
  }
  @media (min-width: 768px) {
    width: 342px;
    font-size: 16px;
  }
  @media (min-width: 1280px) {
    width: 363px;
  }
`;

export const MainBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin-bottom: 36px;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
  > p {
    color: #173d33;
    font-family: Fira Sans;
    font-size: 16px;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.64px;
  }
`;
