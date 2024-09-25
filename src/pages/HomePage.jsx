import { useState } from "react";
import HomeCardsContainer from "../components/homecard/HomeCardsContainer";
import HeroWrapper from "../components/HeroWrapper";
import PowerFUlContainer from "../components/power/PowerFulContainer";
import Header from "../layout/Header";
import HomeSection from "../components/Hero";
import FindCareContainer from "../components/findcare/FindCareConatiner";
import FaqsContainer from "../components/Faqs/FaqsContainer";
import KnowledgeContainer from "../components/knowledge/KnowledgeContainer";
import PlacingHelpSection from "../components/Placeing/placeing";
import Footer from "../layout/footer/footer";
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
      <PowerFUlContainer />
      <FindCareContainer />
      <KnowledgeContainer />
      <PlacingHelpSection />
      <Footer />
    </>
  );
}

export default HomePage;
