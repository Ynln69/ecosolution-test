import { Section, Container } from "css/base.styled";
import sprite from "../../images/sprite.svg";

import {
  CasesContent,
  CasesTitle,
  CasesBox,
  CasesCounter,
  ThumbButton,
  CasesButton,
} from "./Cases.styled";

const Cases = () => {
  return (
    <Section id="cases">
      <Container>
        <CasesContent>
          <CasesTitle>Successful cases of our company</CasesTitle>
          <CasesBox>
            <CasesCounter>
              01 <span>/05</span>
            </CasesCounter>
            <ThumbButton>
              <CasesButton>
                <svg width={36} height={36}>
                  <use xlinkHref={`${sprite}#icon-arrow-left`}></use>
                </svg>
              </CasesButton>
              <CasesButton>
                <svg width={36} height={36}>
                  <use xlinkHref={`${sprite}#icon-arrow-right`}></use>
                </svg>
              </CasesButton>
            </ThumbButton>
          </CasesBox>
        </CasesContent>
      </Container>
    </Section>
  );
};

export default Cases;
