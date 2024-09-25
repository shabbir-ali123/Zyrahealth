import React from "react";
import Header from "../../layout/Header";
import GuidingPlatform from "./GuidingPlatform";

function GuidingHeroSection() {
  return (
    <div className="bg-gradient-to-t from-lime-200 to-yellow-200  h-screen">
      <Header styles="shadow-none" />
      <div class="relative flex flex-1 w-full flex-col items-center justify-center text-center px-4 py-20 ">
        <h1 class="max-w-6xl font-display  max-sm:text-3xl  md:text-5xl xl:text-6xl font-semibold tracking-normal	">
          Elevating aging,
          <div class="relative whitespace-nowrap sm:text-3xl md:text-5xl xl:text-6xl ">
            one family at a time
          </div>
        </h1>
        <h2 class="mx-auto mt-12 max-w-xl text-xl	 max-sm:text-lg  leading-7">
          We're inspired by the strength and love of families who choose to
          support their loved ones age in their own homes. It's that resilience
          that fuels our mission to create something truly impactful - a future
          where aging is not a burden, but a source of wisdom, strength, and
          celebrated way of life
        </h2>
        <img
          src="images/Ellipse.png"
          alt=""
          class="ellipse-1 absolute right-[77%] top-[11%]"
        />
        <img
          src="images/Ellipse2.png"
          alt=""
          class="ellipse-2 absolute left-[77%] top-[11%]"
        />
        <img
          src="images/Ellipse3.png"
          alt=""
          class="ellipse-3 absolute right-[90%] top-[50%]"
        />
        <img
          src="images/Ellipse4.png"
          alt=""
          class="ellipse-4 absolute left-[83%] top-[68%]"
        />
        <img
          src="images/Ellipse5.png"
          alt=""
          class="ellipse-5 absolute right-[76%;] top-[107%]"
        />
        <img
          src="images/Ellipse6.png"
          alt=""
          class="ellipse-6 absolute left-[50%] top-[100%]"
        />
      </div>
    </div>
  );
}

export default GuidingHeroSection;
