import { useState } from "react";
import sprite from "../../images/sprite.svg";
import initialQuestions from "../data/questions.json";
import {
  FqaContainer,
  FqaItem,
  FqaList,
  FqaTitle,
  ItemButton,
  ItemTitle,
  ItemText,
  FqaText,
  FqaBox,
} from "./Questions.styled";
import Button from "components/Button/Button";
import Title from "components/Title/Title";

const Questions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const scrollToContacts = () => {
    const contactsSection = document.getElementById("contacts");
    if (contactsSection) {
      contactsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="questions">
      <FqaContainer>
        <FqaTitle>
          <Title title="Frequently Asked Questions" />
        </FqaTitle>
        <FqaList>
          {initialQuestions.map((question, index) => (
            <FqaItem key={index}>
              <ItemButton onClick={() => toggleQuestion(index)}>
                <svg>
                  <use
                    xlinkHref={`${sprite}#${
                      openIndex === index ? "icon-minus" : "icon-plus"
                    }`}
                  ></use>
                </svg>
              </ItemButton>
              <div>
                <ItemTitle>{question.title}</ItemTitle>
                {openIndex === index && <ItemText>{question.answer}</ItemText>}
              </div>
            </FqaItem>
          ))}
        </FqaList>
        <FqaBox>
          <FqaText>Didn't find the answer to your question?</FqaText>
          <Button title="Contact Us" onClick={scrollToContacts} />
        </FqaBox>
      </FqaContainer>
    </section>
  );
};

export default Questions;
