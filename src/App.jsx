import { useState } from "react";
import "./App.css";
import HomeCardsContainer from "./components/HomeCardsContainer";
import HeroWrapper from "./components/HeroWrapper";
import Header from "./layout/Header";
import HomeSection from "./components/Hero";
function App() {
  return (
    <>
      <Header />
      <HomeSection />
      <HeroWrapper />
      <HomeCardsContainer />
    </>
  );
}

export default App;
