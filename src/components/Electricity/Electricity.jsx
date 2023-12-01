import {
  ElectricityContent,
  ElectricityCounter,
  ElectricitySpan,
  ElectricityTitle,
} from "./Electricity.styled";

const Electricity = () => {
  return (
    <section>
      <ElectricityTitle>Electricity we produced for all time</ElectricityTitle>
      <ElectricityContent>
        <ElectricityCounter>1.134.147.814</ElectricityCounter>
        <ElectricitySpan>kWh</ElectricitySpan>
      </ElectricityContent>
    </section>
  );
};

export default Electricity;
