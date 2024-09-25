import React from "react";

function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center w-full ">
      <div className="   px-8 py-6 max-w-lg	">
        <h1 className="text-3xl	 font-semibold text-center mb-2 ">
          We're happy to see you again
        </h1>
        <p className="text-center text-lg	text-[#5E5E6F] font-medium mb-10">
          Please enter your details to login
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
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block  text-sm font-semibold text-[#5E5E6F]  mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="shadow-sm text-sm rounded-full w-full px-4 py-3.5 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 focus:outline-none"
                defaultChecked
              />
              <label
                htmlFor="remember"
                className="ml-2 block text-sm text-[#5E5E6F] "
              >
                Remember me
              </label>
            </div>
            <a
              href="#"
              class="text-sm text-[#2D7CD9] hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Forgot Password?
            </a>
          </div>
          <button
            onClick={() => alert("hello")}
            type="submit"
            className="w-full flex justify-center py-3.5	mt-8	mb-4 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-[#1C1C1C] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Login
          </button>
          <div class="text-center text-sm">
            Don't have an account yet?
            <a
              class="inline-block  text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800"
              href="./index.html"
            >
              Get started
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
