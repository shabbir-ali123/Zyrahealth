import { useState } from "react";
import HomeCardsContainer from "../components/homecard/HomeCardsContainer";

import PowerFUlContainer from "../components/power/PowerFulContainer";
import HomeSection from "../components/homepage/Hero";
import FindCareContainer from "../components/findcare/FindCareConatiner";
import HeroSlider from "../components/homepage/HeroSlider";
import HeroWrapper from "../components/homepage/HeroWrapper";
import FaqsContainer from "../components/faqs/FaqsContainer";
import KnowledgeContainer from "../components/knowledge/KnowledgeContainer";
import PlacingHelpSection from "../components/placeing/placeing";

function HomePage() {
  return (
    <>
      <HomeSection />
      <HeroWrapper />
      <HomeCardsContainer />
      <PowerFUlContainer />
      <FindCareContainer />
      <HeroSlider />
      <FaqsContainer />

      <KnowledgeContainer />
      <PlacingHelpSection />
    </>
  );
}

export default HomePage;
