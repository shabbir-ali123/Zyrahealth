import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import LoginPages from "./pages/LoginPages";
import ResetPassword from "./components/login/ResetPassword";
import CheckYourEmail from "./components/login/CheckEmail";
import NewPassword from "./components/login/NewPassword";
import GuidingHeroSection from "./pages/GuidingSection";
import GuidingPlatform from "./components/guidingPageCompo/GuidingPlatform";
import Getintouch from "./components/getintouch/Getintouch";
import GuidingReview from "./components/guidingPageCompo/GuidingReview";
import HelpCardsContainer from "./pages/HelpContainer";
import DeliveryForm from "./components/helpsection/DeliveryForm";
import HelpCardsGrid from "./pages/HelpCenterContainer";
import Layout from "./layout/Layout";
import FamilyPartnerHelp from "./pages/FamilyHelpContainer";
import ResourcesPage from "./pages/ResourcesPage";
import PartnerHelpContainer from "./pages/PartnerHelpContainer";
import HelpCard from "./components/helpsection/Help";
import ArticlePage from "./pages/ArticlePage";
import ArticleContainer from "./components/article/ArticleTextContainer";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/article" element={<ArticlePage />} />

          <Route path="/guiding-hero" element={<GuidingHeroSection />} />
          <Route path="/guiding-platform" element={<GuidingPlatform />} />
          <Route path="/guiding-review" element={<GuidingReview />} />
          <Route path="/get-in-touch" element={<Getintouch />} />
          <Route path="/help-section" element={<HelpCardsContainer />} />
          <Route path="/delivery-form" element={<DeliveryForm />} />
          <Route path="/help-center" element={<HelpCardsGrid />} />
        </Route>

        <Route path="/login" element={<LoginPages />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/check-email" element={<CheckYourEmail />} />
        <Route path="/new-password" element={<NewPassword />} />
        <Route path="/guiding-section" element={<GuidingHeroSection />} />
        <Route path="/guiding-platform" element={<GuidingPlatform />} />
        <Route path="/guiding-review" element={<GuidingReview />} />
        <Route path="/get-in-touchpage" element={<Getintouchpage />} />
        <Route path="/help-section" element={<HelpCardsContainer />} />
        <Route path="/delivery-form" element={<DeliveryForm />} />
        <Route path="/help-center" element={<HelpCardsGrid />} />
        <Route path="/family-help-center" element={<FamilyPartnerHelp />} />
        <Route path="/partner-help-center" element={<PartnerHelpContainer />} />
        <Route path="/recources-page" element={<ResourcesPage />} />
        <Route path="/help-sections" element={<HelpCard />} />
        <Route path="/article" element={<ArticlePage />} />
      </Routes>
    </Router>
  );
}

export default App;
