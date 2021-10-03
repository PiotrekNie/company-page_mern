import React from "react";
import "./App.css";
import styled from "styled-components";
import { HomePage } from "./app/containers/HomePage";
import tw from "twin.macro";

const AppContainer = styled.div`
  background: linear-gradient(to bottom, #fecd4d 0%, #ef647b 100%);
  ${tw`
    flex
    flex-col
    w-full
    h-full
    p-3
    md:p-6
  `}
`;

function App() {
  return (
    <AppContainer>
      <HomePage />
    </AppContainer>
  );
}

export default App;
