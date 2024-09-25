import React,{useRef} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import img from '../../public/images/person.png'
import curveOne from "../../public/images/curveOne.png"
import curveTwo from "../../public/images/curveTwo.png"
import curveThree from "../../public/images/curveThree.png"
import curveFour from "../../public/images/curveFour.png"
import curveFive from "../../public/images/curveFive.png"
import '../assets/css/slider.css'
import { IoArrowBack, IoArrowForward  } from 'react-icons/io5';


const HeroSlider = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

  return (
    <>
    <section className='w-full flex items-center justify-center bg-[#F7F7F7]'>
        <div className='flex flex-col gap-36 pl-3 h-full'>
            <img className='w-[40px]' src={curveOne}></img>
            <img className='w-[40px]' src={curveTwo}></img>
            <img className='w-[40px]' src={curveThree}></img>
        </div>
        <div className="relative w-[90%]">
      {/* Swiper */}
      <Swiper
        cssMode={true}
        navigation={{
          prevEl: '.swiper-button-fore',
          nextEl: '.swiper-button-back',
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="w-[80%] h-[60vh] my-6"
      >
        {/* First Slide */}
        <SwiperSlide className='text-center flex flex-col items-center gap-4'>
          <h1 className='text-4xl font-semibold'>Trusted By Families Like Yours</h1>
          <img src={img} alt="person" />
          <h2 className='text-lg font-semibold text-wrap w-[63%]'>
          We found the perfect caregiver for mom. She's kind and incredibly helpful. The process of getting the care my mom needed was simple, and now she's happy and well taken care of. It feels wonderful to see her content.
          </h2>
        </SwiperSlide>

        {/* Second Slide */}
        <SwiperSlide className='text-center flex flex-col items-center gap-4'>
          <h1 className='text-4xl font-semibold'>Trusted By Families Like Yours</h1>
          <img src={img} alt="person" />
          <h2 className='text-lg font-semibold text-wrap w-[63%]'>
            We found the perfect caregiver for mom. She's kind and incredibly helpful. The process of getting the care my mom needed was simple, and now she's happy and well taken care of. It feels wonderful to see her content.
          </h2>
        </SwiperSlide>

        {/* Third Slide */}
        <SwiperSlide className='text-center flex flex-col items-center gap-4'>
          <h1 className='text-4xl font-semibold'>Trusted By Families Like Yours</h1>
          <img src={img} alt="person" />
          <h2 className='text-lg font-semibold text-wrap w-[63%]'>
            We found the perfect caregiver for mom. She's kind and incredibly helpful. The process of getting the care my mom needed was simple, and now she's happy and well taken care of. It feels wonderful to see her content.
          </h2>
        </SwiperSlide>
      </Swiper>
      {/* coustom buttons */}
      <div
        ref={prevRef}
        className="swiper-button-back absolute left-2 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer p-3 border border-black rounded-full flex items-center justify-center"
      >
        <IoArrowBack  size={24} />
      </div>
      <div
        ref={nextRef}
        className="swiper-button-fore absolute right-2 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer p-3 border border-black rounded-full flex items-center justify-center"
      >
        <IoArrowForward size={24} />
      </div>
      </div>
      
      <div className='flex flex-col gap-36 pr-3 h-full'>
            <img className='w-[40px]' src={curveFour}></img>
            <img className='w-[40px]' src={curveTwo}></img>
            <img className='w-[40px]' src={curveFive}></img>
        </div>
    </section>
    </>
  )
}

export default HeroSlider
