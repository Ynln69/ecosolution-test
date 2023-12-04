import styled from "@emotion/styled";
import { MainTitle } from "components/Title/Title.stylde";

export const CasesContent = styled.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const CasesTitle = styled(MainTitle)`
  position: relative;
  margin-bottom: 24px;
  @media (min-width: 768px) {
    width: 264px;
  }
  @media (min-width: 1280px) {
    width: 398px;
  }
  &::after {
    @media (min-width: 768px) {
      position: absolute;
      display: block;
      content: "";
      width: 1px;
      right: -90px;
      top: 0;
      background: #97d28b;
      height: 100%;
    }
    @media (min-width: 1280px) {
      right: -140px;
    }
  }
`;
export const CasesBox = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;
export const CasesCounter = styled.p`
  color: #173d33;
  text-align: justify;
  font-family: Fira Sans;
  font-size: 28px;
  font-weight: 300;
  line-height: normal;
  letter-spacing: -1.12px;
  > span {
    color: rgba(23, 61, 51, 0.25);
  }
`;
export const ThumbButton = styled.div``;
export const CasesButton = styled.button`
  display: inline-flex;
  padding: 15px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 100px;
  border: 1px solid #173d33;

  background: transparent;
  stroke: #173d33;
`;
