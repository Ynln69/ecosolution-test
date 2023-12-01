import styled from "@emotion/styled";

export const MainTitle = styled.h2`
  color: #173d33;
  font-family: Oswald;
  font-size: 28px;
  font-weight: 400;
  line-height: 28px;
  text-transform: uppercase;

  @media (min-width: 480px) {
    width: 320px;
  }
  @media (min-width: 768px) {
    width: 347px;
    font-size: 36px;
    line-height: 36px;
  }
  @media (min-width: 1280px) {
    width: 398px;
    font-size: 48px;
    line-height: 48px;
  }
`;
