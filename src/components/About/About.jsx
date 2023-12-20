// import useWindowSize from "hooks/useWindowSize";
import valuesData from "../data/values.json";
import Title from "components/Title/Title";

// import SolarPanelsMedium from "../../images/tablet/solar-panels768.jpg";
// import SolarPanelsLarge from "../../images/solar-panels1280.jpg";
// import WindFarmsMedium from "../../images/tablet/wind-farms-fields768.jpg";
// import WindFarmsLarge from "../../images/wind-farms-fields1280.jpg";

import {
  ValuesContent,
  ValuesText,
  ValuesList,
  ValuesItem,
  ItemTitle,
  ItemText,
} from "./About.styled";
import sprite from "../../images/sprite.svg";
import { Container, Section } from "css/base.styled";

const About = () => {
  // const { width } = useWindowSize();
  return (
    <Section id="about">
      <Container>
        <ValuesContent>
          <Title title="Main values of our company" />
          <ValuesText>
            EcoSolution envisions a world where sustainable energy solutions
            power a brighter and cleaner future for all. We aspire to be at the
            forefront of the global shift towards renewable energy, leading the
            way in innovative technologies that harness the power of nature to
            meet the world's energy needs.
          </ValuesText>
        </ValuesContent>
        <ValuesList>
          {valuesData.map((value, index) => (
            <ValuesItem key={index}>
              <svg width={16} height={16}>
                <use xlinkHref={`${sprite}#${value.icon}`}></use>
              </svg>
              <ItemTitle>{value.title}</ItemTitle>
              <ItemText>{value.text}</ItemText>
            </ValuesItem>
          ))}
        </ValuesList>
      </Container>
    </Section>
  );
};

export default About;
