import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [isOn, setIsOn] = useState([
    { id: 1, room: "Living Room", lightOn: false },
    { id: 2, room: "Kitchen", lightOn: false },
    { id: 3, room: "Bedroom", lightOn: false },
    { id: 4, room: "Bathroom", lightOn: false },
    { id: 5, room: "Garage", lightOn: false },
    { id: 6, room: "Porch", lightOn: false },
    { id: 7, room: "Garden", lightOn: false },
    { id: 8, room: "Office", lightOn: false },
  ]);

  const roomsWithLightsOn = isOn.filter((room) => room.lightOn);

  function handleToggle(id) {
    setIsOn(
      isOn.map((room) => {
        if (room.id === id) return { ...room, lightOn: !room.lightOn };
        else {
          return room;
        }
      })
    );
  }

  function allLightsOn() {
    setIsOn(
      isOn.map((room) => {
        return { ...room, lightOn: true };
      })
    );
  }

  function allLightsOff() {
    setIsOn(
      isOn.map((room) => {
        return { ...room, lightOn: false };
      })
    );
  }

  return (
    <Layout roomsWithLightsOn={roomsWithLightsOn}>
      <GlobalStyle />
      <Component
        {...pageProps}
        isOn={isOn}
        onHandleToggle={handleToggle}
        roomsWithLightsOn={roomsWithLightsOn}
        allLightsOn={allLightsOn}
        allLightsOff={allLightsOff}
      />
    </Layout>
  );
}
