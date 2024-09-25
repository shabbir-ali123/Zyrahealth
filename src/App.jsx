import { useState } from "react";
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
    <>
    <Getintouchpage/>
    </>
  );
}

export default App;
