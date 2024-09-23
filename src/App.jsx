import { useState } from "react";
import "./App.css";
import HomeCardsContainer from "./components/HomeCardsContainer";
import HeroWrapper from "./components/HeroWrapper";
import PowerFUlContainer from "./components/PowerFulContainer";
import Header from "./layout/Header";
function App() {
  return (
    <>
      <Header />
      <HeroWrapper />
      <HomeCardsContainer />
      <PowerFUlContainer/>
    </>
  );
}

export default App;
