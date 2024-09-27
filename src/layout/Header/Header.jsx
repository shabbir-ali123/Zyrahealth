import React from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
function Header({ styles = "" }) {
  return (
    <Disclosure as="nav" className="bg-white shadow">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex">
            <div className="flex flex-shrink-0 items-center">
              <img alt="Your Company" src="images/Logo.png" className=" " />
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8 text-lg font-semibold text-[#5E5E6F]">
            <a href="#" className="inline-flex items-center  px-1 pt-1  	">
              Find help
            </a>

            <Link to="/resources" className="inline-flex items-center border-b-2 border-transparent px-1 pt-1    hover:border-gray-300 hover:text-gray-700">
              Resources
            </Link>

            <a
              href="#"
              className="inline-flex items-center border-b-2 border-transparent px-1 pt-1  hover:border-gray-300 hover:text-gray-700"
            >
              Become a partner
            </a>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Link
              to="/login"
              className=" border-2 border-black text-black font-semibold hover:text-white hover:bg-gray-600 px-7	 py-2 rounded-full transition"
            >
              Login
            </Link>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block h-6 w-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden h-6 w-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden pb-4  ">
        <div className="space-y-1 pb-3 pt-2">
          {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
          <DisclosureButton
            as="a"
            href="#"
            className="block  border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700"
          >
            Find help
          </DisclosureButton>
          <DisclosureButton

            className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
          >
            <Link to="/resources">
              Resources
            </Link>

          </DisclosureButton>
          <DisclosureButton
            className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
          >
            Become a partner
          </DisclosureButton>
        </div>
        <Link
          to="/login"
          className=" border-2 border-black text-black  mb-4 ml-4 font-semibold hover:text-white hover:bg-gray-600 px-7	 py-2 rounded-full transition"
        >
          Login
        </Link>
      </DisclosurePanel>
    </Disclosure>
  );
}

export default Header;
