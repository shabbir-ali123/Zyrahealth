import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import person from "/images/person.png";

import "../../assets/css/slider.css";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";

const HeroSlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <>
      <section className="w-full flex items-center justify-center bg-[#F7F7F7]">
        <div className="flex flex-col gap-36 pl-3 h-full">
          <img className="w-[40px]" src="images/curveOne.png" />
          <img className="w-[40px]" src="images/curveTwo.png" />
          <img className="w-[40px]" src="images/curveThree.png" />
        </div>
        <div className="relative w-[90%]">
          {/* Swiper */}
          <Swiper
            cssMode={true}
            navigation={{
              prevEl: ".swiper-button-fore",
              nextEl: ".swiper-button-back",
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
            <SwiperSlide className="text-center flex flex-col items-center justify-center gap-4">
              <h1 className="text-4xl font-semibold">
                Trusted By Families Like Yours
              </h1>
              <img src={person} alt="person" />
              <h2 className="text-lg font-semibold text-wrap w-[63%]">
                We found the perfect caregiver for mom. She's kind and
                incredibly helpful. The process of getting the care my mom
                needed was simple, and now she's happy and well taken care of.
                It feels wonderful to see her content.
              </h2>
              <div className="flex flex-col gap-3">
                <div className="border border-black"></div>
                <p className="text-[#5E5E6F]">Sara R. Charlotte, NC</p>
              </div>
            </SwiperSlide>

            {/* Second Slide */}
            <SwiperSlide className="text-center flex flex-col items-center justify-center gap-4">
              <h1 className="text-4xl font-semibold">
                Trusted By Families Like Yours
              </h1>
              <img src={person} alt="person" />
              <h2 className="text-lg font-semibold text-wrap w-[63%]">
                We found the perfect caregiver for mom. She's kind and
                incredibly helpful. The process of getting the care my mom
                needed was simple, and now she's happy and well taken care of.
                It feels wonderful to see her content.
              </h2>
              <div className="flex flex-col gap-3">
                <div className="border border-black"></div>
                <p className="text-[#5E5E6F]">Sara R. Charlotte, NC</p>
              </div>
            </SwiperSlide>

            {/* Third Slide */}
            <SwiperSlide className="text-center flex flex-col items-center justify-center gap-4">
              <h1 className="text-4xl font-semibold">
                Trusted By Families Like Yours
              </h1>
              <img src={person} alt="person" />
              <h2 className="text-lg font-semibold text-wrap w-[63%]">
                We found the perfect caregiver for mom. She's kind and
                incredibly helpful. The process of getting the care my mom
                needed was simple, and now she's happy and well taken care of.
                It feels wonderful to see her content.
              </h2>
              <div className="flex flex-col gap-3">
                <div className="border border-black"></div>
                <p className="text-[#5E5E6F]">Sara R. Charlotte, NC</p>
              </div>
            </SwiperSlide>
          </Swiper>
          {/* coustom buttons */}
          <div
            ref={prevRef}
            className="swiper-button-back absolute left-2 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer p-3 border border-black rounded-full flex items-center justify-center"
          >
            <IoArrowBack size={24} />
          </div>
          <div
            ref={nextRef}
            className="swiper-button-fore absolute right-2 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer p-3 border border-black rounded-full flex items-center justify-center"
          >
            <IoArrowForward size={24} />
          </div>
        </div>

        <div className="flex flex-col gap-36 pr-3 h-full">
          <img className="w-[40px]" src="images/curveFour.png" />
          <img className="w-[40px]" src="images/curveTwo.png" />
          <img className="w-[40px]" src="images/curveFive.png" />
        </div>
      </section>
    </>
  );
};

export default HeroSlider;
