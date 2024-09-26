import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import LoginPages from "./pages/LoginPages";
import ResetPassword from "./components/login/ResetPassword";
import CheckYourEmail from "./components/login/CheckEmail";
import NewPassword from "./components/login/NewPassword";
import LoginPageHeader from "./layout/Header/LoginPageHeader";
import GuidingHeroSection from "./pages/GuidingPrinciple/GuidingSection";
import GuidingPlatform from "./pages/GuidingPrinciple/GuidingPlatform";
import Getintouch from "./components/getintouch/Getintouch";
import GuidingReview from "./components/guidingPageCompo/GuidingReview";
import HelpCard from "./components/helpsection/Help";
import HelpCardsContainer from "./components/helpsection/HelpContainer";
import DeliveryForm from "./components/helpsection/DeliveryForm";
import HelpCardsGrid from "./components/helpcenter/HelpCenterContainer";
import Gethelp from "./components/getintouch/Gethelp";
import Contact from "./components/getintouch/Contact";
import Getintouchpage from "./pages/Getintouchpage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home-page" element={<HomePage />} />
        <Route path="/login" element={<LoginPages />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/check-email" element={<CheckYourEmail />} />
        <Route path="/new-password" element={<NewPassword />} />
        <Route path="/guiding-hero" element={<GuidingHeroSection />} />
        <Route path="/guiding-platform" element={<GuidingPlatform />} />
        <Route path="/guiding-review" element={<GuidingReview />} />

        <Route path="/get-in-touch" element={<Getintouch />} />
        <Route path="/help-section" element={<HelpCardsContainer />} />
        <Route path="/delivery-form" element={<DeliveryForm />} />
        <Route path="/help-center" element={<HelpCardsGrid />} />
      </Routes>
    </Router>
  );
}

export default App;
