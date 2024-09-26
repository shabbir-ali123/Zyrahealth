import { useState } from "react";
import HomeCardsContainer from "../components/homecard/HomeCardsContainer";
import HeroWrapper from "../components/HeroWrapper";
import PowerFUlContainer from "../components/power/PowerFulContainer";
import HomeSection from "../components/Hero";
import FindCareContainer from "../components/findcare/FindCareConatiner";
import FaqsContainer from "../components/faqs/FaqsContainer";
import KnowledgeContainer from "../components/knowledge/KnowledgeContainer";
import PlacingHelpSection from "../components/placeing/placeing";
import HeroSlider from "../components/HeroSlider";
import Header from "../layout/Header";
import Footer from "../layout/footer/Footer";
function HomePage() {
  return (
    <>
      <Header />
      <HomeSection />
      <HeroWrapper />
      <HomeCardsContainer />
      <PowerFUlContainer />
      <FindCareContainer />
      <HeroSlider />
      <FaqsContainer />

      <KnowledgeContainer />
      <PlacingHelpSection />
      <Footer />
    </>
  );
}

export default HomePage;
