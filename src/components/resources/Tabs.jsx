import React, { useState } from 'react';

import KnowledgeData from "../../data/KnowledgeData";
import KnowledgeCard from '../knowledge/KnowledgeCard';
import Personilize from './HomeLove/HomeMaintance';
function Tabs() {

    const [activeTab, setActiveTab] = useState(0);

    // Array of tab titles and corresponding content with basic card-like structure
    const tabs = [
        {
            title: 'All articles',
            icon: <Personilize className="h-10 w-10 bg-black rounded-full p-10" />,
            content: (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {KnowledgeData.map((card) => (
                        <KnowledgeCard
                            key={card.id}
                            image={card.image}
                            title={card.title}
                            description={card.description}
                            Icon={card.Icon}
                            bgColor={card.bgColor}
                        />
                    ))}
                </div>
            ),
        },
        {
            title: 'Features',
            icon: <Personilize className="h-10 w-10 bg-[red] rounded-full p-10" />,
            content: (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="p-4 border rounded-lg bg-gray-100 shadow-md">
                        <h3 className="font-semibold text-lg">Card 4</h3>
                        <p className="text-sm text-gray-500">This is card 4 content.</p>
                    </div>
                    <div className="p-4 border rounded-lg bg-gray-100 shadow-md">
                        <h3 className="font-semibold text-lg">Card 5</h3>
                        <p className="text-sm text-gray-500">This is card 5 content.</p>
                    </div>
                    <div className="p-4 border rounded-lg bg-gray-100 shadow-md">
                        <h3 className="font-semibold text-lg">Card 6</h3>
                        <p className="text-sm text-gray-500">This is card 6 content.</p>
                    </div>
                </div>
            ),
        },
        {
            title: 'Most popular',
            icon: <Personilize className="h-10 w-10 bg-[red] rounded-full p-10" />,
            content: (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="p-4 border rounded-lg bg-gray-100 shadow-md">
                        <h3 className="font-semibold text-lg">Card 7</h3>
                        <p className="text-sm text-gray-500">This is card 7 content.</p>
                    </div>
                    <div className="p-4 border rounded-lg bg-gray-100 shadow-md">
                        <h3 className="font-semibold text-lg">Card 8</h3>
                        <p className="text-sm text-gray-500">This is card 8 content.</p>
                    </div>
                    <div className="p-4 border rounded-lg bg-gray-100 shadow-md">
                        <h3 className="font-semibold text-lg">Card 9</h3>
                        <p className="text-sm text-gray-500">This is card 9 content.</p>
                    </div>
                </div>
            ),
        },
        {
            title: 'Caregiver corner',
            icon: <Personilize className="h-10 w-10 bg-[red] rounded-full p-10" />,
            content: (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="p-4 border rounded-lg bg-gray-100 shadow-md">
                        <h3 className="font-semibold text-lg">Card 10</h3>
                        <p className="text-sm text-gray-500">This is card 10 content.</p>
                    </div>
                    <div className="p-4 border rounded-lg bg-gray-100 shadow-md">
                        <h3 className="font-semibold text-lg">Card 11</h3>
                        <p className="text-sm text-gray-500">This is card 11 content.</p>
                    </div>
                    <div className="p-4 border rounded-lg bg-gray-100 shadow-md">
                        <h3 className="font-semibold text-lg">Card 12</h3>
                        <p className="text-sm text-gray-500">This is card 12 content.</p>
                    </div>
                </div>
            ),
        },
        {
            title: 'Personal care',
            icon: <Personilize className="h-10 w-10 bg-[red] rounded-full p-10" />,
            content: (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="p-4 border rounded-lg bg-gray-100 shadow-md">
                        <h3 className="font-semibold text-lg">Card 13</h3>
                        <p className="text-sm text-gray-500">This is card 13 content.</p>
                    </div>
                    <div className="p-4 border rounded-lg bg-gray-100 shadow-md">
                        <h3 className="font-semibold text-lg">Card 14</h3>
                        <p className="text-sm text-gray-500">This is card 14 content.</p>
                    </div>
                    <div className="p-4 border rounded-lg bg-gray-100 shadow-md">
                        <h3 className="font-semibold text-lg">Card 15</h3>
                        <p className="text-sm text-gray-500">This is card 15 content.</p>
                    </div>
                </div>
            ),
        },
        {
            title: 'Home maintenance',
            icon: <Personilize className="h-10 w-10 bg-[red] rounded-full p-10" />,
            content: (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="p-4 border rounded-lg bg-gray-100 shadow-md">
                        <h3 className="font-semibold text-lg">Card 13</h3>
                        <p className="text-sm text-gray-500">This is card 13 content.</p>
                    </div>
                    <div className="p-4 border rounded-lg bg-gray-100 shadow-md">
                        <h3 className="font-semibold text-lg">Card 14</h3>
                        <p className="text-sm text-gray-500">This is card 14 content.</p>
                    </div>
                    <div className="p-4 border rounded-lg bg-gray-100 shadow-md">
                        <h3 className="font-semibold text-lg">Card 15</h3>
                        <p className="text-sm text-gray-500">This is card 15 content.</p>
                    </div>
                </div>
            ),
        },
        {
            title: 'Transportation',
            icon: <Personilize className="h-10 w-10 bg-[red] rounded-full p-10" />,
            content: (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="p-4 border rounded-lg bg-gray-100 shadow-md">
                        <h3 className="font-semibold text-lg">Card 13</h3>
                        <p className="text-sm text-gray-500">This is card 13 content.</p>
                    </div>
                    <div className="p-4 border rounded-lg bg-gray-100 shadow-md">
                        <h3 className="font-semibold text-lg">Card 14</h3>
                        <p className="text-sm text-gray-500">This is card 14 content.</p>
                    </div>
                    <div className="p-4 border rounded-lg bg-gray-100 shadow-md">
                        <h3 className="font-semibold text-lg">Card 15</h3>
                        <p className="text-sm text-gray-500">This is card 15 content.</p>
                    </div>
                </div>
            ),
        },
        {
            title: 'Legal matters',
            icon: <Personilize className="h-10 w-10 bg-[red] rounded-full p-10" />,
            content: (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="p-4 border rounded-lg bg-gray-100 shadow-md">
                        <h3 className="font-semibold text-lg">Card 13</h3>
                        <p className="text-sm text-gray-500">This is card 13 content.</p>
                    </div>
                    <div className="p-4 border rounded-lg bg-gray-100 shadow-md">
                        <h3 className="font-semibold text-lg">Card 14</h3>
                        <p className="text-sm text-gray-500">This is card 14 content.</p>
                    </div>
                    <div className="p-4 border rounded-lg bg-gray-100 shadow-md">
                        <h3 className="font-semibold text-lg">Card 15</h3>
                        <p className="text-sm text-gray-500">This is card 15 content.</p>
                    </div>
                </div>
            ),
        },
        {
            title: 'Financial health',
            icon: <Personilize className="h-10 w-10 bg-[red] rounded-full p-10" />,
            content: (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="p-4 border rounded-lg bg-gray-100 shadow-md">
                        <h3 className="font-semibold text-lg">Card 13</h3>
                        <p className="text-sm text-gray-500">This is card 13 content.</p>
                    </div>
                    <div className="p-4 border rounded-lg bg-gray-100 shadow-md">
                        <h3 className="font-semibold text-lg">Card 14</h3>
                        <p className="text-sm text-gray-500">This is card 14 content.</p>
                    </div>
                    <div className="p-4 border rounded-lg bg-gray-100 shadow-md">
                        <h3 className="font-semibold text-lg">Card 15</h3>
                        <p className="text-sm text-gray-500">This is card 15 content.</p>
                    </div>
                </div>
            ),
        },
    ];

    return (
        <div className="w-full mx-auto p-4">

            <div className="flex justify-evenly border-b justify-center border-gray-200 mb-4">
                {tabs.map((tab, index) => (

                    <button
                        key={index}
                        onClick={() => setActiveTab(index)}
                        className={`py-2 px-4 flex flex-col items-center transition-colors duration-300 ${activeTab === index
                            ? 'border-b-2 border-[#109088] text-[#5E5E6F] font-semibold'
                            : 'text-gray-500 hover:text-indigo-500'
                            }`}
                    >
                        <span className='bg-[#F9ECEC] h-[60px] w-[60px] rounded-full flex items-center justify-center mb-2'>{tab.icon}</span>
                        <span className=''>{tab.title}</span>
                    </button>
                ))}
            </div>


            <div className="p-4  rounded-lg bg-white ">
                {tabs[activeTab].content}
            </div>
        </div>
    );
}

export default Tabs;
