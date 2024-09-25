import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import LoginPages from "./pages/LoginPages";
import ResetPassword from "./components/Login/ResetPassword";
import CheckYourEmail from "./components/Login/CheckEmail";
import NewPassword from "./components/Login/NewPassword";
import LoginPageHeader from "./layout/Header/LoginPageHeader";
import GuidingHeroSection from "./pages/GuidingPrinciple/GuidingSection";
import GuidingPlatform from "./pages/GuidingPrinciple/GuidingPlatform";
import Getintouch from "./components/getintouch/Getintouch";
import Gethelp from "./components/getintouch/Gethelp";
import Contact from "./components/getintouch/Contact";
import Getintouchpage from "./pages/Getintouchpage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPages />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/check-email" element={<CheckYourEmail />} />
        <Route path="/new-password" element={<NewPassword />} />
        <Route path="/guiding-hero" element={<GuidingHeroSection />} />
        <Route path="/guiding-platform" element={<GuidingPlatform />} />
        <Route path="/get-in-touch" element={<Getintouch />} />
      </Routes>
    </Router>
  );
}

export default App;
