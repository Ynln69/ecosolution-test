import styled from "@emotion/styled";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding-top: 36px;
`;

export const BtnBox = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const BtnMenu = styled.button`
  height: 39px;
  display: inline-flex;
  align-items: center;
  padding: 4px 12px;
  border-radius: 500px;
  border: none;

  background: #dcefd8;

  &:hover {
    background: #97d28b;
  }
`;

export const BtnGet = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  border-radius: 500px;
  border: none;
  padding: 10px 16px;

  color: #173d33;
  background-color: #97d28b;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;
  &:hover {
    color: #97d28b;
    background-color: #173d33;
  }
`;
