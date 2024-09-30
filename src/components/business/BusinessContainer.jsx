import React from 'react'
import HomeCard from '../homecard/HomeCard';
import cardsData from '../../data/CardsData';
import PowerFulCard from '../power/PowerFulCard';
import PowerData from '../../data/PowerData';
import FindCare from '../findcare/FindCare';
import FindCareData from '../../data/FindCareData';
import Slider from '../slider/Slider';


const BusinessContainer = ({ title, description, Icon }) => {
  return (
    <>
     <section className=' flex justify-center flex-col'>
            <div className='flex flex-col items-center'>
                <h1 className='sm:text-4xl text-2xl font-semibold text-center'>Seize the opportunity</h1>
                <div className='mt-3 h-[2px] w-24 border border-black'></div>
                <p className='pt-4 text-xl text-[#5E5E6F] text-center'>Transform homes. Transform lives</p>
            </div>
            <div className='grid gap-10 sm:gap-0 sm:grid-cols-3 justify-center mt-12 justify-items-center'>
                <div className='flex items-center flex-col w-[60%]'>
                    <h1 className='text-3xl font-semibold'>77M</h1>
                    <p className='text-xl text-center text-[#5E5E6F]'>Number of seniors by 2034</p>
                </div>
                <div className='flex items-center flex-col w-[60%]'>
                    <h1 className='text-3xl font-semibold'>90%</h1>
                    <p className='text-xl text-center text-[#5E5E6F]'>Seniors showing desire to age in their homes</p>
                </div>
                <div className='flex items-center flex-col w-[60%]'>
                    <h1 className='text-3xl font-semibold'>$460B</h1>
                    <p className='text-xl text-center text-[#5E5E6F]'>Estimated to be worth of total home care market</p>
                </div>
            </div>
        </section>
        {/* section 2 */}
        <section className='bg-[#F7F7F7]'>
        <div className="mx-20 py-20 mt-20	">
        <div className="text-center">
          <h2 className="font-semibold text-4xl">Right in the home you love</h2>
          <div className="mx-auto w-[100px] h-[3px] bg-[#1C1C1C] mt-2"></div>
          <p className="font-medium text-xl text-[#575757] py-4">
            Get professional, vetted help delivered to your home
          </p>
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
        </section>
        {/* section 3 */}
        <section>
        <div className='bg-[#FFFF]'>
        <div className='mx-20 py-[80px]'>
                <div className='text-center '>
                    <h2 className='font-semibold text-4xl'>Drive your business forward</h2>
                    <div className="mx-auto w-[100px] h-[3px] bg-[#1C1C1C] mt-2"></div>
                   
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-24 gap-y-10 mt-[50px]">


                    {PowerData.map((card) => (
                        <PowerFulCard
                            key={card.id}
                            title={card.title}
                            description={card.description}
                            Icon={card.Icon}
                        />
                    ))}
                </div>
            </div>
        </div>
        </section>
        {/* section 4 */}
        <section>
        <div className='bg-[#F7F7F7]'>
        <div className='mx-20 py-[80px]'>
                <div className='text-center '>
                    <h2 className='font-semibold text-4xl'>Simple steps. Lasting impact</h2>
                    <div className="mx-auto w-[100px] h-[3px] bg-[#1C1C1C] mt-2"></div>
                    <p className='mt-5 text-xl font-medium text-[#5E5E6F]'>Take your business to new heights with ease</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-24 gap-y-10 mt-[50px]">

                    {FindCareData.map((card) => (
                        <FindCare
                            key={card.id}
                            title={card.title}
                            description={card.description}
                            count={card.count}
                            bgColor={card.bgColor}
                        />
                    ))}
                </div>
                <div className='mt-[50px] flex justify-center'>
                <button className='text-white bg-black px-[30px] py-[9px] rounded-full'>Get Started Now</button>
                </div>
            </div>
        </div>
        </section>
        {/* section 5 */}
        <section>
            <div className='mx-20 py-[80px]'>
                <Slider />
            </div>
        </section>
    </>
  )
}

export default BusinessContainer
