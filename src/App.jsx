import { useState } from "react";
import "./App.css";
import HomeCardsContainer from "./components/HomeCardsContainer";
import HeroWrapper from "./components/HeroWrapper";
import PowerFUlContainer from "./components/PowerFulContainer";
import Header from "./layout/Header";
import HomeSection from "./components/Hero";
function App() {
  return (
    <>
      <Header />
      <HomeSection />
      <HeroWrapper />
      <HomeCardsContainer />
      <PowerFUlContainer/>
    </>
  );
}

export default App;
