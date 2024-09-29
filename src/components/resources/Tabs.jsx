import React, { useState } from "react";

import KnowledgeData from "../../data/KnowledgeData";
import FeaturedData from "../../data/FeaturedData";
import KnowledgeCard from "../knowledge/KnowledgeCard";
import Personilize from "./HomeLove/HomeMaintance";
import PersonalCare from "./HomeLove/PersonalCareIcon";
import EndLife from "./HomeLove/End-of-LifePlanning";
import Professional from "./HomeLove/ProfessionalServices";
import Heart from "./HomeLove/WellNess";
import AllResources from "../../assets/icons/resources/AllResources";
import Popular from "../../assets/icons/resources/PopularIcon";
import Star from "../../assets/icons/resources/StarIcon";
import Transportation from "../../assets/icons/resources/Transportation";

function Tabs() {
  const [activeTab, setActiveTab] = useState(0);
  const [currentPage, setCurrentPage] = useState(1); // Page state
  const cardsPerPage = 6; // Number of cards per page

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const paginate = (data) => {
    const startIndex = (currentPage - 1) * cardsPerPage;
    return data.slice(startIndex, startIndex + cardsPerPage);
  };
  const tabs = [
    {
      title: "All articles",
      icon: <AllResources className="h-10 w-10 bg-black rounded-full p-10" />,
      content: (
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mx-10 justify-center poppin">
            {paginate(KnowledgeData).map((card) => (
              <KnowledgeCard
                key={card.id}
                image={card.image}
                title={card.title}
                chip={card.chip}
                description={card.description}
                Icon={card.Icon}
                bgColor={card.bgColor}
              />
            ))}
          </div>
          <Pagination
            totalCards={KnowledgeData.length}
            cardsPerPage={cardsPerPage}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      ),
    },
    {
      title: "Features",
      icon: <Star className="h-10 w-10 bg-[red] rounded-full p-10" />,
      content: (
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mx-10 justify-center poppin">
            {paginate(FeaturedData).map((card) => (
              <KnowledgeCard
                key={card.id}
                image={card.image}
                title={card.title}
                chip={card.chip}
                description={card.description}
                Icon={card.Icon}
                bgColor={card.bgColor}
              />
            ))}
          </div>
          <Pagination
            totalCards={FeaturedData.length}
            cardsPerPage={cardsPerPage}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      ),
    },
    {
      title: "Most popular",
      icon: <Popular className="h-10 w-10 bg-[red] rounded-full p-10" />,
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mx-10 justfiy-center poppin">
          {KnowledgeData.map((card) => (
            <KnowledgeCard
              key={card.id}
              image={card.image}
              title={card.title}
              chip={card.chip}
              description={card.description}
              Icon={card.Icon}
              bgColor={card.bgColor}
            />
          ))}
        </div>
      ),
    },
    {
      title: "Caregiver corner",
      icon: <Heart className="h-10 w-10 bg-[red] rounded-full p-10" />,
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mx-10 justfiy-center poppin">
          {KnowledgeData.map((card) => (
            <KnowledgeCard
              key={card.id}
              image={card.image}
              title={card.title}
              chip={card.chip}
              description={card.description}
              Icon={card.Icon}
              bgColor={card.bgColor}
            />
          ))}
        </div>
      ),
    },
    {
      title: "Personal care",
      icon: <PersonalCare className="h-10 w-10 bg-[red] rounded-full p-10" />,
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mx-10 justfiy-center poppin">
          {KnowledgeData.map((card) => (
            <KnowledgeCard
              key={card.id}
              image={card.image}
              title={card.title}
              chip={card.chip}
              description={card.description}
              Icon={card.Icon}
              bgColor={card.bgColor}
            />
          ))}
        </div>
      ),
    },
    {
      title: "Home maintenance",
      icon: <Personilize className="h-10 w-10 bg-[red] rounded-full p-10" />,
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mx-10 justfiy-center poppin">
          {KnowledgeData.map((card) => (
            <KnowledgeCard
              key={card.id}
              image={card.image}
              title={card.title}
              chip={card.chip}
              description={card.description}
              Icon={card.Icon}
              bgColor={card.bgColor}
            />
          ))}
        </div>
      ),
    },
    {
      title: "Transportation",
      icon: <Transportation className="h-10 w-10 bg-[red] rounded-full p-10" />,
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mx-10 justfiy-center poppin">
          {KnowledgeData.map((card) => (
            <KnowledgeCard
              key={card.id}
              image={card.image}
              title={card.title}
              chip={card.chip}
              description={card.description}
              Icon={card.Icon}
              bgColor={card.bgColor}
            />
          ))}
        </div>
      ),
    },
    {
      title: "Legal matters",
      icon: <Professional className="h-10 w-10 bg-[red] rounded-full p-10" />,
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mx-10 justfiy-center poppin">
          {KnowledgeData.map((card) => (
            <KnowledgeCard
              key={card.id}
              image={card.image}
              title={card.title}
              chip={card.chip}
              description={card.description}
              Icon={card.Icon}
              bgColor={card.bgColor}
            />
          ))}
        </div>
      ),
    },
    {
      title: "Financial health",
      icon: <EndLife className="h-10 w-10 bg-[red] rounded-full p-10" />,
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mx-10 justfiy-center poppin">
          {KnowledgeData.map((card) => (
            <KnowledgeCard
              key={card.id}
              image={card.image}
              title={card.title}
              chip={card.chip}
              description={card.description}
              Icon={card.Icon}
              bgColor={card.bgColor}
            />
          ))}
        </div>
      ),
    },
  ];

  return (
    <div className="w-full mx-auto px-4 py-8 poppin">
      <div className="flex justify-evenly border-b justify-center border-gray-200 mb-4">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`py-2 px-4 flex flex-col items-center transition-colors duration-300 ${
              activeTab === index
                ? "border-b-2 border-[#109088] text-[#5E5E6F] font-semibold"
                : "text-gray-500 hover:text-indigo-500"
            }`}
          >
            <span
              className={`h-[60px] w-[60px] rounded-full flex items-center justify-center mb-2 ${
                activeTab === index ? "bg-[#F3B5B5]" : "bg-[#F9ECEC]"
              }`}
            >
              {tab.icon}
            </span>
            <span className="">{tab.title}</span>
          </button>
        ))}
      </div>

      <div className="p-4  rounded-lg bg-white ">{tabs[activeTab].content}</div>
    </div>
  );
}
// Pagination component
function Pagination({ totalCards, cardsPerPage, currentPage, onPageChange }) {
  const totalPages = Math.ceil(totalCards / cardsPerPage);

  if (totalPages === 1) return null; // Don't show pagination if only one page

  return (
    <div className="flex justify-center mt-4 poppin">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`mx-2 ${
          currentPage === 1
            ? "text-gray-400"
            : "text-indigo-500 hover:text-indigo-700"
        }`}
      >
        Previous
      </button>
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          onClick={() => onPageChange(index + 1)}
          className={`mx-2 ${
            currentPage === index + 1
              ? "text-indigo-700 font-bold"
              : "text-indigo-500 hover:text-indigo-700"
          }`}
        >
          {index + 1}
        </button>
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`mx-2 ${
          currentPage === totalPages
            ? "text-gray-400"
            : "text-indigo-500 hover:text-indigo-700"
        }`}
      >
        Next
      </button>
    </div>
  );
}
export default Tabs;
