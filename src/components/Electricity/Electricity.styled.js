import styled from "@emotion/styled";
import { MainTitle } from "components/Title/Title.stylde";

export const ElectricityTitle = styled(MainTitle)`
  margin: 0 auto;
  text-align: center;
  @media (min-width: 1280px) {
    width: 491px;
  }
  &::after {
    display: block;
    content: "";
    width: 1px;
    height: 48px;
    margin: 24px auto;

    background: #97d28b;

    @media (min-width: 768px) {
      height: 87px;
    }
  }
`;
export const ElectricityContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;
export const ElectricityCounter = styled.p`
  color: #97d28b;
  text-align: center;
  font-family: Oswald;
  font-size: 48px;
  font-weight: 700;
  line-height: 48px;
  text-transform: uppercase;

  @media (min-width: 768px) {
    font-size: 100px;
    line-height: 100px;
  }
  @media (min-width: 1280px) {
    font-size: 164px;
    line-height: 164px;
  }
`;
export const ElectricitySpan = styled.span`
  color: #173d33;
  text-align: center;
  font-family: Oswald;
  font-size: 24px;
  font-weight: 400;
  line-height: 24px;
  @media (min-width: 768px) {
    font-size: 28px;
    line-height: 48px;
  }
  @media (min-width: 1280px) {
    font-size: 48px;
  }
`;
