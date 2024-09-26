// src/components/HomeCard.jsx
import React from 'react';

function ResourcesHero() {
    return (
        <>
            <div className="bg-[#F7F7F7]">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                    <div className="col-span-1 md:col-span-5 md:mx-20 mx-4">
                        <button className="rounded-full py-3 px-6 bg-[#F9ECEC]">Featured</button>
                        <h2 className="text-2xl md:text-3xl font-semibold text-[#1C1C1C] pb-2 leading-[35px] md:leading-[50px]">
                            10 things you should know when choosing a home health provider
                        </h2>
                        <p className="text-sm md:text-base text-[#5E5E6F] py-4">
                            When it comes to aging or managing long-term health issues, home health care can be an absolute lifesaver. But what exactly is home health care? Put simply, it’s professional care provided in the comfort of your own home...
                        </p>
                        <button className="mt-2 py-2 bg-transparent text-[#109088] text-sm md:text-base font-semibold">
                            Read more
                        </button>
                    </div>
                    <div className="col-span-1 md:col-span-7">
                        <img src="images/resources.png" className="w-full h-auto" alt="Resources" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default ResourcesHero;
