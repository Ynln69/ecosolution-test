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
    <section id="cases">
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
    </section>
  );
};

export default Cases;
