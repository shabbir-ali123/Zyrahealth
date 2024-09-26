import React from "react";
import HelpCenterData from "../../data/HelpCenterData";
import HelpCenterCard from "./HelpCenterCard";
import FaqsContainer from "../faqs/FaqsContainer";

const HelpCardsGrid = () => {
  return (
    <div className=" max-w-screen-lg mx-auto">
      <div className="flex justify-around m-10 p-4 bg-[#F7F7F7]	rounded-full ">
        <button className="rounded-full flex items-center justify-center gap-4 bg-black px-20	w-96	text-base	font-medium py-3.5	 text-white">
          Families
        </button>
        <button className="rounded-full flex items-center gap-4 justify-center w-96 bg-[#EAEAEA]  px-20	text-base	font-medium py-3.5	 text-black">
          Partners
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 ">
        {HelpCenterData.map((card) => (
          <HelpCenterCard
            key={card.id}
            name={card.name}
            description={card.description}
            Icon={card.Icon}
          />
        ))}
      </div>
      <FaqsContainer headingChange="Top FAQs" />
    </div>
  );
};

export default HelpCardsGrid;
