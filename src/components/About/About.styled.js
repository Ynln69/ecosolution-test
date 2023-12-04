import styled from "@emotion/styled";

// export const Values = styled.section`
//   padding: 36px 0;

//   @media (min-width: 768px) {
//     padding: 100px 0;
//   }
//   @media (min-width: 1280px) {
//     padding: 120px 0;
//   }
// `;
export const ValuesContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    margin-bottom: 36px;

    @media (min-width: 768px){
      flex-direction: row;
      justify-content: space-between;
      margin-bottom: 100px;
    }
    @media (min-width: 1280px){
      margin-bottom: 124px;
    }
}`;
export const ValuesText = styled.p`
  color: #173d33;
  text-align: justify;
  font-family: Fira Sans;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;
  @media (min-width: 480px) {
    width: 320px;
  }
  @media (min-width: 768px) {
    width: 342px;
    position: relative;
  }
  @media (min-width: 1280px) {
    width: 459px;
  }
  &::after {
    
    @media (min-width: 768px) {
    position: absolute;
    display: block;
    content: "";
    width: 1px;
    left: -11px;
    top: 0;
    background: #97d28b;
    height: 100%;
    }
    @media (min-width: 1280px) {
      left: -80px;
    }
`;
export const ValuesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
`;
export const ValuesItem = styled.li`
  height: 197px;
  flex-shrink: 0;
  padding: 12px;

  background: #eaedf1;
  &.image-item {
    height: auto;
    padding: 0;
    background: none;
  }
  @media (min-width: 1280px) {
    padding: 24px;
  }
`;

export const ItemTitle = styled.h3`
  display: inline-block;
  margin-left: 8px;
  margin-bottom: 30px;

  color: #173d33;
  font-family: Oswald;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-transform: uppercase;
  @media (min-width: 768px) {
    margin-bottom: 51px;
  }
  @media (min-width: 1280px) {
    margin-bottom: 94px;
  }
`;

export const ItemText = styled.p`
  width: 124px;
  color: #173d33;
  text-align: justify;
  font-family: Fira Sans;
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.56px;
  &::before {
    display: block;
    content: "";
    background: #97d28b;
    height: 1px;
    margin-bottom: 12px;
  }
  @media (min-width: 480px) {
  }
  @media (min-width: 768px) {
    width: 135px;
  }
  @media (min-width: 1280px) {
    width: 205px;
  }
`;
