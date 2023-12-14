import { useState, useEffect } from "react";

import {
  ElectricityContent,
  ElectricityCounter,
  ElectricitySpan,
  ElectricityTitle,
} from "./Electricity.styled";
import { Container, Section } from "css/base.styled";

const Electricity = () => {
  const [counter, setCounter] = useState(1134147814);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <Section>
      <Container>
        <ElectricityTitle>
          Electricity we produced for all time
        </ElectricityTitle>
        <ElectricityContent>
          <ElectricityCounter>{counter.toLocaleString()}</ElectricityCounter>
          <ElectricitySpan>kWh</ElectricitySpan>
        </ElectricityContent>
      </Container>
    </Section>
  );
};

export default Electricity;
