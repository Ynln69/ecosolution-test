import styled from "@emotion/styled";

export const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding: 0 20px;
  @media (min-width: 480px) {
    width: 440px;
  }
  @media (min-width: 768px) {
    width: 708px;
    padding: 0 30px;
  }
  @media (min-width: 1280px) {
    width: 1080px;
    padding: 0 100px;
  }
`;

export const Section = styled.section`
  padding-top: 18px;
  padding-bottom: 18px;
  @media (min-width: 768px) {
    padding-top: 50px;
    padding-bottom: 50px;
  }
  @media (min-width: 1280px) {
    padding-top: 60px;
    padding-bottom: 60px;
  }
`;
