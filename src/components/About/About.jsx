import useWindowSize from "hooks/useWindowSize";
import {
  ValuesContent,
  ValuesText,
  ValuesList,
  ValuesItem,
  ItemTitle,
  ItemText,
} from "./About.styled";
import SolarPanelsMedium from "../../images/tablet/solar-panels768.jpg";
import SolarPanelsLarge from "../../images/solar-panels1280.jpg";
import WindFarmsMedium from "../../images/tablet/wind-farms-fields768.jpg";
import WindFarmsLarge from "../../images/wind-farms-fields1280.jpg";

import sprite from "../../images/sprite.svg";
import Title from "components/Title/Title";

const About = () => {
  const { width } = useWindowSize();
  return (
    <section id="about">
      <ValuesContent>
        <Title title="Main values of our company" />
        <ValuesText>
          EcoSolution envisions a world where sustainable energy solutions power
          a brighter and cleaner future for all. We aspire to be at the
          forefront of the global shift towards renewable energy, leading the
          way in innovative technologies that harness the power of nature to
          meet the world's energy needs.
        </ValuesText>
      </ValuesContent>
      <ValuesList>
        <ValuesItem>
          <svg width={16} height={16}>
            <use xlinkHref={`${sprite}#icon-maximize-circle`}></use>
          </svg>
          <ItemTitle> Openness</ItemTitle>
          <ItemText>to the world, people, new ideas and projects</ItemText>
        </ValuesItem>
        <ValuesItem>
          <svg width={16} height={16}>
            <use xlinkHref={`${sprite}#icon-global-edit`}></use>
          </svg>
          <ItemTitle> Responsibility</ItemTitle>
          <ItemText>
            we are aware that the results of our work have an impact on our
            lives and the lives of future generations
          </ItemText>
        </ValuesItem>
        {width >= 768 && (
          <ValuesItem className="image-item">
            <img
              img
              srcSet={`
          ${SolarPanelsMedium} 768w,
          ${SolarPanelsLarge} 1280w
        `}
              sizes="
        (max-width: 768px) 80vw,
        (max-width: 1280px) 60vw,
        1200px"
              src={SolarPanelsMedium}
              alt="Wind Turbine"
            />
          </ValuesItem>
        )}
        {width >= 768 && (
          <ValuesItem className="image-item">
            <img
              img
              srcSet={`
          ${WindFarmsMedium} 768w,
          ${WindFarmsLarge} 1280w
        `}
              sizes="
        (max-width: 768px) 80vw,
        (max-width: 1280px) 60vw,
        1200px"
              src={WindFarmsMedium}
              alt="Wind Turbine"
            />
          </ValuesItem>
        )}

        <ValuesItem>
          <svg width={16} height={16}>
            <use xlinkHref={`${sprite}#icon-cpu-charge`}></use>
          </svg>
          <ItemTitle> Innovation</ItemTitle>
          <ItemText>
            we use the latest technology to implement non-standard solutions
          </ItemText>
        </ValuesItem>
        <ValuesItem>
          <svg width={16} height={16}>
            <use xlinkHref={`${sprite}#icon-ranking`}></use>
          </svg>
          <ItemTitle> Quality</ItemTitle>
          <ItemText>
            we do not strive to be the first among others, but we want to be the
            best in our business
          </ItemText>
        </ValuesItem>
      </ValuesList>
    </section>
  );
};

export default About;
