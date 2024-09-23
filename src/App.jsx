import { useState } from "react";
import "./App.css";
import HomeCardsContainer from "./components/HomeCardsContainer";
import HeroWrapper from "./components/HeroWrapper";
import Header from "./layout/Header";
function App() {
  return (
    <>
      <Header />
      <HeroWrapper />
      <HomeCardsContainer />
    </>
  );
}

export default App;
