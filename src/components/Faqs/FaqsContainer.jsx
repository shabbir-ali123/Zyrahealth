// src/components/FaqsContainer.jsx
import React from "react";
import FaqsCard from "./Faqs";

import { faqsData } from "../../data/FaqsData";

function FaqsContainer({ headingChange = " Got questions? We've answers" }) {
  return (
    <>
      <div className="max-w-7xl mx-auto py-20 mt-20 px-5">
        <div className="text-center">
          <h2 className="font-semibold text-4xl">{headingChange}</h2>
          <div className="mx-auto w-[100px] h-[3px] bg-[#1C1C1C] mt-2"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 mt-[50px]">
          {faqsData.map((faq) => (
            <FaqsCard
              key={faq.id}
              title={faq.title}
              description={faq.description}
              bgColor="bg-white" // Customize color if needed
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default FaqsContainer;
