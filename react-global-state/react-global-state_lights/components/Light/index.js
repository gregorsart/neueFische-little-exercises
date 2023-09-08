import { LightButton, Icon, Text, Name, State } from "./Light.styled";

export default function Light({ name, onHandleToggle, isOn, id }) {
  return (
    <LightButton
      type="button"
      onClick={() => {
        onHandleToggle(id);
      }}
      $isOn={isOn}
    >
      <Icon $isOn={isOn}>💡</Icon>
      <Text>
        <Name>{name}</Name>
        <State>{isOn ? "On" : "Off"}</State>
      </Text>
    </LightButton>
  );
}
