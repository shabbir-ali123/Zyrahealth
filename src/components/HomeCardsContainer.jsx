
import React from 'react';
import HomeCard from './HomeCard';
import cardsData from '../data/CardsData';

function HomeCardsContainer() {
    return (
        <>
            <div className='max-w-7xl mx-auto py-[80px]'>
                <div className='text-center'>
                    <h2 className='font-semibold text-4xl'>Right in the home you love</h2>
                    <p className='font-medium text-xl text-[#575757] py-4'>Get professional, vetted help delivered to your home</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-[50px]">


                    {cardsData.map((card) => (
                        <HomeCard
                            key={card.id}
                            title={card.title}
                            description={card.description}
                            Icon={card.Icon}
                            bgColor={card.bgColor}
                        />
                    ))}
                </div>
            </div>


        </>

    );
}

export default HomeCardsContainer;
