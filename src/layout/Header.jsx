import React from "react";

function Header() {
  return (
    <header className="bg-gray-100 py-4 px-8 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="font-bold text-2xl">
          <a href="/" className="text-gray-800">
            ZyraHealth+
          </a>
        </div>

        {/* Navigation Links */}
        <nav className="space-x-6">
          <a
            href="#"
            className=" hover:text-gray-900 text-[17px] text-[#5E5E6F] font-semibold"
          >
            Find Help
          </a>
          <a
            href="#"
            className=" hover:text-gray-900 text-[17px] text-[#5E5E6F] font-semibold"
          >
            Resources
          </a>
          <a
            href="#"
            className=" hover:text-gray-900 text-[17px] text-[#5E5E6F] font-semibold"
          >
            Become a Partner
          </a>
        </nav>

        {/* Login Button */}
        <div>
          <a
            href="#"
            className=" border-2 border-black text-black font-semibold hover:text-white hover:bg-gray-600 px-7	 py-2 rounded-full transition"
          >
            Login
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
