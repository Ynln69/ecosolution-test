import styled from "@emotion/styled";

export const SecondaryButton = styled.button`
  height: 39px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 4px 4px 4px 16px;
  flex-shrink: 0;
  border-radius: 500px;
  border: 1px solid #97d28b;

  background-color: transparent;
  color: #173d33;
  font-family: Fira Sans;
  font-size: 16px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.64px;
  &:hover {
    border: 1px solid #173d33;
    color: #97d28b;
    background: #173d33;
  }
`;

export const ButtonSvg = styled.svg`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 8px;
  border-radius: 100px;
  background: #97d28b;
`;
