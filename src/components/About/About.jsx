import {
  ValuesContent,
  ValuesText,
  ValuesList,
  ValuesItem,
} from "./About.styled";
import sprite from "../../images/sprite.svg";
import Title from "components/Title/Title";

const About = () => {
  return (
    <section>
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
          <h3> Openness</h3>
          <p>to the world, people, new ideas and projects</p>
        </ValuesItem>
        <ValuesItem>
          <svg width={16} height={16}>
            <use xlinkHref={`${sprite}#icon-global-edit`}></use>
          </svg>
          <h3> Responsibility</h3>
          <p>
            we are aware that the results of our work have an impact on our
            lives and the lives of future generations
          </p>
        </ValuesItem>
        <ValuesItem>
          <svg width={16} height={16}>
            <use xlinkHref={`${sprite}#icon-cpu-charge`}></use>
          </svg>
          <h3> Innovation</h3>
          <p>
            we use the latest technology to implement non-standard solutions
          </p>
        </ValuesItem>
        <ValuesItem>
          <svg width={16} height={16}>
            <use xlinkHref={`${sprite}#icon-ranking`}></use>
          </svg>
          <h3> Quality</h3>
          <p>
            we do not strive to be the first among others, but we want to be the
            best in our business
          </p>
        </ValuesItem>
      </ValuesList>
    </section>
  );
};

export default About;
