import React from "react";

function ResetPassword() {
  return (
    <div className="min-h-screen flex items-center justify-center w-full ">
      <div className="   px-8 py-6 max-w-lg	">
        <h1 className="text-3xl	 font-semibold text-center mb-2 ">
          Let's help reset your password
        </h1>
        <p className="text-center text-lg	text-[#5E5E6F] font-medium mb-10">
          Please enter your email to receive a link
        </p>
        <form action="#">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-[#5E5E6F]  mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm text-sm rounded-full w-full px-4 py-3.5	 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your email"
              required
            />
          </div>

          <button
            onClick={() => alert("hello")}
            type="submit"
            className="w-full flex justify-center py-3.5	mt-8	mb-4 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-[#1C1C1C] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
          </button>
          <div class="text-center text-sm">
            <a
              class="inline-block  text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800"
              href="./index.html"
            >
              Cancel and return to login
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
