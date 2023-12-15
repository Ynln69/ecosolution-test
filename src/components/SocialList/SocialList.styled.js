import styled from "@emotion/styled";

export const List = styled.ul`
  display: flex;
  gap: 8px;
  justify-content: center;
`;

export const SocialSvg = styled.svg`
  stroke: ${(props) => props.stroke || "#173d33"};
`;
