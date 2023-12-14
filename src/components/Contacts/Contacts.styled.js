import styled from "@emotion/styled";
import { SecondaryButton } from "components/SecondaryBtn/SecondaryBtn.styled";
import { MainTitle } from "components/Title/Title.stylde";

export const ContactsTitle = styled(MainTitle)`
  margin: 0 auto;
  margin-bottom: 24px;
  @media (min-width: 480px) {
    width: 131px;
  }
  @media (min-width: 768px) {
    width: 168px;
    margin-bottom: 40px;
  }
  @media (min-width: 1280px) {
    width: 224px;
    margin-bottom: 120px;
  }
`;

export const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }
`;

export const ContactList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 24px;
  @media (min-width: 1280px) {
    gap: 24px;
  }
`;
export const ContactsItem = styled.li`
  width: 244px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  > div {
    display: flex;
    gap: 32px;
  }
  @media (min-width: 1280px) {
    width: 466px;
    gap: 16px;
  }
`;
export const ContactsSubtitle = styled.h3`
  color: #173d33;
  text-align: justify;
  font-family: Fira Sans;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;
`;
export const ContactsDesc = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;

  color: #173d33;
  text-align: justify;
  font-family: Fira Sans;
  font-size: 20px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.8px;
`;

// FORM STYLE

export const ContactForm = styled.form`
  position: relative;
  width: 296px;
  display: flex;
  flex-direction: column;
  gap: 28px;
  padding: 36px 12px;

  background: #eaedf1;
  @media (min-width: 768px) {
    width: 294px;
    padding: 36px 24px;
  }
  @media (min-width: 1280px) {
    width: 500px;
    padding: 48px;
  }
`;
export const ContactLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;

  color: #173d33;
  text-align: justify;
  font-family: Fira Sans;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;
`;
export const ContactInput = styled.input`
  background: transparent;
  border: none;
  border-bottom: 1px solid #97d28b;
  outline: none;
  padding-bottom: 8px;
  &::placeholder {
    color: #bdbdbd;
    font-family: Fira Sans;
    font-size: 18px;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.72px;
  }
`;
export const ContactTextarea = styled.textarea`
  background: transparent;
  border: none;
  border-bottom: 1px solid #97d28b;
  outline: none;
  resize: none;
  &::placeholder {
    color: #bdbdbd;
    font-family: Fira Sans;
    font-size: 18px;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.72px;
  }
`;
export const ContactBtn = styled(SecondaryButton)`
  width: 99px;
`;
