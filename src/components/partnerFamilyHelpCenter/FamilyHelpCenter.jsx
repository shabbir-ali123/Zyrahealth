import React from "react";
import { Link } from "react-router-dom"; // Import Link
import HelpCenterHeroSection from "../helpcenter/HelpCenterHeroSection";

function FamilyPartnerHelp({ changeTheHeading, changeTheText, extraThings }) {
  return (
    <HelpCenterHeroSection
      changeTheHeading="Family help center"
      changeTheText="Your guide to finding the right care and support"
      extraThings={
        <>
          <span className="mx-2">|</span>
          <Link to="/help-center" className="hover:underline text-gray-500">
            Help Center
          </Link>
        </>
      }
    />
  );
}

export default FamilyPartnerHelp;
