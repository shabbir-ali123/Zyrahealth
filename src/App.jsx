import { useState } from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import LoginPages from "./pages/LoginPages";
import ResetPassword from "./components/Login/ResetPassword";
import CheckYourEmail from "./components/Login/CheckEmail";

function App() {
  return (
    <>
      {/* <HomePage/> */}
      {/* <LoginPages /> */}
      {/* <ResetPassword /> */}
      <CheckYourEmail />
    </>
  );
}

export default App;
