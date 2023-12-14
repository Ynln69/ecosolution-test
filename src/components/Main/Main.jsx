import useWindowSize from "hooks/useWindowSize";
import SecondaryBtn from "components/SecondaryBtn/SecondaryBtn";

import WindTurbineSmall from "../../images/mobile/wind-turbine360.jpg";
import WindTurbineMedium from "../../images/tablet/wind-turbine768.jpg";
import WindTurbineLarge from "../../images/wind-turbine1280.jpg";

import {
  MainSection,
  MainContainer,
  TextContainer,
  Title,
  Text,
  MainBox,
} from "./Main.styled";
import { Container } from "css/base.styled";

const Main = () => {
  const { width } = useWindowSize();

  const scrollToContacts = () => {
    const contactsSection = document.getElementById("cases");
    if (contactsSection) {
      contactsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <MainSection id="main">
      <Container>
        <MainContainer>
          <Title>Renewable energy for any task</Title>
          <TextContainer>
            <Text>
              Development and implementation of renewable non-polluting energy
              sources, generating power generation using energy wind, sun,
              water, biomass
            </Text>
            <SecondaryBtn title="Learn more" onClick={scrollToContacts} />
          </TextContainer>
        </MainContainer>
        <MainBox>
          <p>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</p>
          <p>office@ecosolution.com</p>
          {width >= 768 && <p>ecosolution © 2023</p>}
        </MainBox>
        <img
          srcSet={`
          ${WindTurbineSmall} 480w,
          ${WindTurbineMedium} 768w,
          ${WindTurbineLarge} 1280w
        `}
          sizes="(max-width: 480px) 100vw,
        (max-width: 768px) 80vw,
        (max-width: 1280px) 60vw,
        1200px"
          src={WindTurbineSmall}
          alt="Wind Turbine"
        />
      </Container>
    </MainSection>
  );
};

export default Main;
