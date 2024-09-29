import React, { useState } from "react";

import ChoosingProviders from "../../assets/icons/helpcentericons/Choosingproviders";
import ServiceDetail from "../../assets/icons/helpcentericons/Servicedetails";
import BookingServices from "../../assets/icons/helpcentericons/BookingServices";
import ProviderInteraction from "../../assets/icons/helpcentericons/ProviderInteraction";
import PaymentsFees from "../../assets/icons/helpcentericons/PaymentsFees";
import AccountProfile from "../../assets/icons/helpcentericons/AccountProfile";
import TrustSafety from "../../assets/icons/helpcentericons/TrustSafety";
import FindingHelp from "../../assets/icons/helpcentericons/Findinghelp";
import GettingStarted from "../../assets/icons/helpcentericons/Gettingstarted";
import FamilyHelpCard from "./FamilyPartnerCards";
import FamilyHelpData from "../../data/FamilyHelpData";
import PartnerHelpContainer from "../../pages/PartnerHelpContainer";

function FamilyTabs() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "Getting started",
      icon: <GettingStarted className="h-10 w-10 bg-black rounded-full p-10" />,
      content: (
        <div className=" gap-8 mx-10 justify-center poppin ">
          {FamilyHelpData.map((card) => (
            <FamilyHelpCard
              key={card.id}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      ),
    },

    {
      title: "Finding Help",
      icon: <FindingHelp className="h-10 w-10 bg-black rounded-full p-10" />,
      content: (
        <div className=" gap-8 mx-10 justify-center">
          {FamilyHelpData.map((card) => (
            <FamilyHelpCard
              key={card.id}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      ),
    },
    {
      title: "Choosing providers",
      icon: (
        <ChoosingProviders className="h-10 w-10 bg-black rounded-full p-10" />
      ),
      content: (
        <div className=" gap-8 mx-10 justify-center">
          {FamilyHelpData.map((card) => (
            <FamilyHelpCard
              key={card.id}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      ),
    },
    {
      title: "Service details",
      icon: <ServiceDetail className="h-10 w-10 bg-black rounded-full p-10" />,
      content: (
        <div className=" gap-8 mx-10 justify-center">
          {FamilyHelpData.map((card) => (
            <FamilyHelpCard
              key={card.id}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      ),
    },
    {
      title: "Provider interaction",
      icon: (
        <ProviderInteraction className="h-10 w-10 bg-black rounded-full p-10" />
      ),
      content: (
        <div className=" gap-8 mx-10 justify-center">
          {FamilyHelpData.map((card) => (
            <FamilyHelpCard
              key={card.id}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      ),
    },
    {
      title: "Booking service",
      icon: (
        <BookingServices className="h-10 w-10 bg-black rounded-full p-10" />
      ),
      content: (
        <div className=" gap-8 mx-10 justify-center">
          {FamilyHelpData.map((card) => (
            <FamilyHelpCard
              key={card.id}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      ),
    },
    {
      title: "Payments & fees",
      icon: <PaymentsFees className="h-10 w-10 bg-black rounded-full p-10" />,
      content: (
        <div className=" gap-8 mx-10 justify-center">
          {FamilyHelpData.map((card) => (
            <FamilyHelpCard
              key={card.id}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      ),
    },
    {
      title: "Account & profile",
      icon: <AccountProfile className="h-10 w-10 bg-black rounded-full p-10" />,
      content: (
        <div className=" gap-8 mx-10 justify-center">
          {FamilyHelpData.map((card) => (
            <FamilyHelpCard
              key={card.id}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      ),
    },
    {
      title: "Trust & safety",
      icon: <TrustSafety className="h-10 w-10 bg-black rounded-full p-10" />,
      content: (
        <div className=" gap-8 mx-10 justify-center">
          {FamilyHelpData.map((card) => (
            <FamilyHelpCard
              key={card.id}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      ),
    },
  ];

  return (
    <div className="w-full mx-auto px-4 py-8">
      <div className="flex justify-evenly border-b justify-center border-gray-200 mb-4 pb-10	">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`py-2 px-4 flex flex-col items-center transition-colors duration-300 ${
              activeTab === index
                ? " text-[#5E5E6F] font-semibold"
                : "text-sm	font-semibold text-black hover:text-indigo-500"
            }`}
          >
            <span
              className={`h-[60px] w-[60px] rounded-full flex items-center justify-center mb-2 ${
                activeTab === index ? "bg-[#F3B5B5]" : "bg-[#F9ECEC]"
              }`}
            >
              {tab.icon}
            </span>
            <span>{tab.title}</span>
          </button>
        ))}
      </div>

      <div className="xl:p-4 rounded-lg bg-white">
        {tabs[activeTab].content}
      </div>
    </div>
  );
}

export default FamilyTabs;
