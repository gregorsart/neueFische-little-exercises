import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({
  allLightsOn,
  allLightsOff,
  roomsWithLightsOn,
}) {
  return (
    <StyledQuickActions>
      <Button
        disabled={roomsWithLightsOn.length === 0 ? true : false}
        type="button"
        onClick={() => {
          allLightsOff();
          console.log("Turn all lights off");
        }}
      >
        Turn all lights off
      </Button>
      <Button
        disabled={roomsWithLightsOn.length === 0 ? false : true}
        type="button"
        onClick={() => {
          allLightsOn();
          console.log("Turn all lights on");
        }}
      >
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
