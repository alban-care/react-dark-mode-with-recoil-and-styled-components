import React from "react";
import DarkModeSwitchButton from "../DarkModeSwitchButton";
import styled from "styled-components";

const Main = styled.main`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.25s linear;
`;

function App(): React.ReactElement {
  return (
    <Main>
      <h1>React dark mode</h1>
      <h2>Using Recoil js & styled-components</h2>
      <DarkModeSwitchButton />
    </Main>
  );
}

export default App;
