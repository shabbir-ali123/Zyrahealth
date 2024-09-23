// src/components/HomeCard.jsx
import React from 'react';

function HomeCard({ title, description, Icon,bgColor  }) {
  return (
    <div className="flex gap-[10px]">
      <div className="flex items-center border border-[#DBDBE0] p-5 rounded-[15px]">
        <div className={`${bgColor} p-5 rounded-[13px] mr-4`}>
         
          <Icon />
        </div>
        <div className="text-left px-2.5">
          <h3 className="font-bold text-[17px]">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default HomeCard;

