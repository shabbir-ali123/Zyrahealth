import React from "react";

const KnowledgeCard = ({ image, title, description }) => {
  return (
    <div className="max-w-xl bg-white border border-gray-200 rounded-lg border-[#EAEAF1]">
      <a href="#">
        <img
          className="rounded-t-lg"
          src={image}
          alt={title}
        />
      </a>
      <div className="px-5 py-3">
      <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-[#5E5E6F] bg-[#E9FFDC] rounded-full "
        >
          Most popular
        </a>
      </div>
   
      <div className="px-5 py-2">
        <a href="#">
          <h5 className="mb-2 text-lg font-semibold text-[#5E5E6F] dark:text-white">
            {title}
          </h5>
        </a>
        <p className="mb-3 font-medium text-base text-[#5E5E6F] ">
          {description}
        </p>
     <div className="flex gap-4 border-t-2 py-4 border-[#EAEAF1]">
        <p className="text-[#5E5E6F] font-base font-regular">By ZyraHealth</p>
        <p className="text-[#5E5E6F]">APR 8, 2024</p>
        <p className="text-[#5E5E6F]">5 min</p>
     </div>
      </div>
    </div>
  );
};

export default KnowledgeCard;
