import useWindowSize from "hooks/useWindowSize";
import {
  MainSection,
  MainContainer,
  TextContainer,
  Title,
  Text,
  MainBox,
} from "./Main.styled";

import SecondaryBtn from "components/SecondaryBtn/SecondaryBtn";

const Main = () => {
  const { width } = useWindowSize();
  const basePath = "../../images/";
  return (
    <MainSection>
      <MainContainer>
        <Title>Renewable energy for any task</Title>
        <TextContainer>
          <Text>
            Development and implementation of renewable non-polluting energy
            sources, generating power generation using energy wind, sun, water,
            biomass
          </Text>
          <SecondaryBtn title="Learn more" />
        </TextContainer>
      </MainContainer>
      <MainBox>
        <p>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</p>
        <p>office@ecosolution.com</p>
        {width >= 768 && <p>ecosolution © 2023</p>}
      </MainBox>
      <img
        alt=""
        srcSet={`${basePath}mobile/wind-turbine360.jpg 360w,
        ${basePath}tablet/wind-turbine768.jpg 768w,
        ${basePath}wind-turbine1280.jpg 1280w`}
        sizes="(max-width: 320px) 280px,
        (max-width: 480px) 440px,
        800px"
        src="../../images/wind-turbine1280.jpg"
      />
    </MainSection>
  );
};

export default Main;
