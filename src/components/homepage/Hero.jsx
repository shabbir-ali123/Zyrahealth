import React from "react";

function HomeSection() {
  return (
    <section className="bg-gradient-to-b from-[#FFFDFD] via-[#FFFDFD] to-[#F7E7E7] py-16 px-4 relative xl-h-screen	poppin ">
      <div className="container mx-auto text-center">
        {/* Left Image and Text */}
        <div
          className="flex items-center pb-6 max-md:flex-col max-md:gap-10
        "
        >
          <div className=" flex flex-col items-center gap-3.5 mt-36 max-md:mt-6	">
            <div className="text-center text-sm text-gray-600 bg-[#FDE7FF] py-2.5	px-2.5 rounded-2xl 		">
              <p className="font-semibold">Kelly, Age 74</p>
              <p>Needs companion care</p>
            </div>
            <img src="images/HeroLeft.png" alt="" srcset="" />
          </div>
          <div>
            {/* Heading */}
            <h1 className="text-6xl font-bold text-gray-800 mb-5 max-sm:text-[30px] font-poppins md:text-4xl">
              Comfort. Choice. Home
            </h1>
            <p className="text-2xl	 text-gray-600 mb-10 w-8/12	mx-auto max-sm:text-lg md:text-xl	">
              Find trusted vendors to help with{" "}
              <span className="text-[#109088] font-semibold animate-fadeIn">
                Personal Care|
              </span>
              to live the best of your days at home.
            </p>

            {/* Call to Action Button */}
            <button className="bg-[#1C1C1C] text-white py-3.5	 px-9	 rounded-full font-semibold  mb-10">
              Find the help you need
            </button>
          </div>

          {/* Content with Images */}
          <div className="flex justify-center items-end  space-x-4 mt-36 max-md:mt-6">
            {/* Right Image and Text */}
            <div className="flex flex-col items-end">
              <img src="images/HeroImage.png" alt="" srcset="" />
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="px-10	py-6	 w-10/12	   mx-auto bg-white p-6 rounded-3xl	 shadow-md absolute	bottom-[-15%] mb-8 left-[8%] max-sm:hidden">
          <div>
            <div className="grid grid-cols-4 gap-4 items-end	justify-items-end">
              {/* Left Section: Heading and Description */}
              <div className="flex flex-col text-left		gap-2">
                <p className="font-semibold text-black text-xl 	">
                  Find help now
                </p>
                <p className="text-gray-500 text-base font-medium	text-left		">
                  Find trusted local providers to support your care needs
                </p>
              </div>

              {/* Middle Section: Dropdowns */}

              {/* First Dropdown Label */}
              <div className="flex flex-col gap-2 w-full	">
                <p className="text-gray-600 text-left font-medium		">
                  Who needs help?
                </p>
                <select
                  className="border border-gray-300 rounded-full px-4 py-3 text-gray-600 text-sm"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Make a selection
                  </option>
                  <option value="self">Self</option>
                  <option value="family">Family</option>
                  <option value="friend">Friend</option>
                </select>
              </div>

              {/* Second Dropdown Label */}
              <div className="flex flex-col gap-2 w-full	">
                <p className="text-gray-600 text-left font-medium		">
                  What kind of help do you need?
                </p>
                <select
                  className="border border-gray-300 rounded-full px-4 py-3	 text-gray-600 text-sm"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Make a selection
                  </option>
                  <option value="self">Self</option>
                  <option value="family">Family</option>
                  <option value="friend">Friend</option>
                </select>
              </div>

              {/* Right Section: Get Started Button */}
              <div>
                <button className="border-2 border-black text-black py-3	 px-9	font-medium	 rounded-full">
                  Get started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeSection;
