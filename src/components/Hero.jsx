import React from "react";

function HomeSection() {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-pink-50 py-16 px-4">
      <div className="container mx-auto text-center">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Comfort. Choice. Home
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Find trusted vendors to help with{" "}
          <span className="text-teal-500 font-semibold">Personal Care</span> to
          live the best of your days at home.
        </p>

        {/* Call to Action Button */}
        <button className="bg-black text-white py-3 px-8 rounded-full font-semibold text-lg mb-10">
          Find the help you need
        </button>

        {/* Content with Images */}
        <div className="flex justify-center items-center mb-10 space-x-4">
          {/* Left Image and Text */}
          <div className="w-1/4 flex flex-col items-center">
            <img
              src="/path-to-left-image.jpg"
              alt="Kelly, Age 74"
              className="rounded-lg shadow-lg mb-2"
            />
            <div className="text-center text-sm text-gray-600">
              <p className="font-semibold">Kelly, Age 74</p>
              <p>Needs companion care</p>
            </div>
          </div>

          {/* Right Image and Text */}
          <div className="w-1/4 flex flex-col items-center">
            <img
              src="/path-to-right-image.jpg"
              alt="Home care verified"
              className="rounded-lg shadow-lg mb-2"
            />
            <div className="text-center text-sm text-gray-600">
              <p className="font-semibold">Home care</p>
              <p className="text-green-500">Verified</p>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto">
          <div className="grid grid-cols-3 gap-4 items-center">
            <div>
              <p className="font-semibold text-gray-700">Find help now</p>
              <p className="text-gray-500">
                Find trusted local providers to support your care needs
              </p>
            </div>

            {/* Dropdowns */}
            <div className="grid grid-cols-2 gap-4">
              <select
                className="border border-gray-300 rounded-md p-3 text-gray-600"
                defaultValue=""
              >
                <option value="" disabled>
                  Who needs help?
                </option>
                <option value="self">Self</option>
                <option value="family">Family</option>
                <option value="friend">Friend</option>
              </select>

              <select
                className="border border-gray-300 rounded-md p-3 text-gray-600"
                defaultValue=""
              >
                <option value="" disabled>
                  What kind of help do you need?
                </option>
                <option value="personal">Personal Care</option>
                <option value="medical">Medical Care</option>
                <option value="home">Home Care</option>
              </select>
            </div>

            {/* Get Started Button */}
            <div>
              <button className="bg-black text-white py-3 px-6 rounded-full">
                Get started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeSection;
