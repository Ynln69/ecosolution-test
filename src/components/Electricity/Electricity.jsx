import React, { useState, useEffect } from "react";

import {
  ElectricityContent,
  ElectricityCounter,
  ElectricitySpan,
  ElectricityTitle,
} from "./Electricity.styled";

const Electricity = () => {
  const [counter, setCounter] = useState(1134147814);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <section>
      <ElectricityTitle>Electricity we produced for all time</ElectricityTitle>
      <ElectricityContent>
        <ElectricityCounter>{counter.toLocaleString()}</ElectricityCounter>
        <ElectricitySpan>kWh</ElectricitySpan>
      </ElectricityContent>
    </section>
  );
};

export default Electricity;
