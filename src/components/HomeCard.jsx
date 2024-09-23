// src/components/HomeCard.jsx
import React from 'react';

function HomeCard({ title, description, Icon }) {
  return (
    <div className="wrapper">
      <div className="parent flex items-center p-4 border rounded-lg shadow-md">
        <div className="icon mr-4">
         
          <Icon />
        </div>
        <div className="content">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default HomeCard;
