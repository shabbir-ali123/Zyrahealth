import { useState } from "react";
import HomeCardsContainer from "../components/homecard/HomeCardsContainer";
import HeroWrapper from "../components/HeroWrapper";
import PowerFUlContainer from "../components/power/PowerFulContainer";
import Header from "../layout/Header";
import HomeSection from "../components/Hero";
import FindCareContainer from "../components/findcare/FindCareConatiner";
import FaqsContainer from "../components/Faqs/FaqsContainer";
function HomePage() {
  return (
    <>
      <Header />
      <HomeSection />
      <HeroWrapper />
      <HomeCardsContainer />
      <PowerFUlContainer />
      <FindCareContainer />
      <FaqsContainer />
    </>
  );
}

export default HomePage;
