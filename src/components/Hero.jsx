import React from "react";

function HomeSection() {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-pink-50 py-16 px-4">
      <div className="container mx-auto text-center">
        {/* Left Image and Text */}
        <div className="flex items-center">
          <div className="w-1/4 flex flex-col items-center">
         <img src="images/HeroImage.png" alt="" srcset="" />
            <div className="text-center text-sm text-gray-600">
              <p className="font-semibold">Kelly, Age 74</p>
              <p>Needs companion care</p>
            </div>
          </div>
          <div>
            {/* Heading */}
            <h1 className="text-6xl font-bold text-gray-800 mb-4">
              Comfort. Choice. Home
            </h1>
            <p className="text-2xl	 text-gray-600 mb-8">
              Find trusted vendors to help with{" "}
              <span className="text-[#109088] font-semibold">
                Personal Care
              </span>{" "}
              to live the best of your days at home.
            </p>

            {/* Call to Action Button */}
            <button className="bg-[#1C1C1C] text-white py-3.5	 px-9	 rounded-full font-semibold  mb-10">
              Find the help you need
            </button>
          </div>

          {/* Content with Images */}
          <div className="flex justify-center items-center mb-10 space-x-4">
            {/* Right Image and Text */}
            <div className="w-1/4 flex flex-col items-center">
              <img
                src="./assets/images/Frame.png"
                alt="Home care verified"
                className="rounded-lg shadow-lg mb-2"
              />
              <div className="text-center text-sm text-gray-600">
                <p className="font-semibold">Home care</p>
                <p className="text-green-500">Verified</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="px-10	py-9	 bg-gray-50 max-w-6xl mx-auto max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <div>
            <div className="flex gap-6 items-center justify-between">
              {/* Left Section: Heading and Description */}
              <div>
                <p className="font-semibold text-black text-lg">
                  Find help now
                </p>
                <p className="text-gray-500 text-sm">
                  Find trusted local providers to support your care needs
                </p>
              </div>

              {/* Middle Section: Dropdowns */}
              <div className="grid grid-cols-2 gap-4">
                {/* First Dropdown Label */}
                <div className="flex flex-col gap-2">
                  <p className="text-gray-600 text-left	">Who needs help?</p>
                  <select
                    className="border border-gray-300 rounded-full px-4 py-2 text-gray-600 text-sm"
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
                <div className="flex flex-col gap-2">
                  <p className="text-gray-600 text-left	">
                    What kind of help do you need?
                  </p>
                  <select
                    className="border border-gray-300 rounded-full px-4 py-2 text-gray-600 text-sm"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Make a selection
                    </option>
                    <option value="personal">Personal Care</option>
                    <option value="medical">Medical Care</option>
                    <option value="home">Home Care</option>
                  </select>
                </div>
              </div>

              {/* Right Section: Get Started Button */}
              <div>
                <button className="border-2 border-black text-black py-2 px-6 rounded-full">
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
