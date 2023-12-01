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
  fill: #292d32;

  &:hover {
    background: #97d28b;
  }
`;
