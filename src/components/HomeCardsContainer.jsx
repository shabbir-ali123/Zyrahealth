// src/components/HomeCardsContainer.jsx
import React from 'react';
import HomeCard from './HomeCard';
import cardsData from '../data/CardsData';

function HomeCardsContainer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cardsData.map((card) => (
        <HomeCard
          key={card.id}
          title={card.title}
          description={card.description}
          Icon={card.Icon}
        />
      ))}
    </div>
  );
}

export default HomeCardsContainer;
