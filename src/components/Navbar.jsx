import React from "react";
import logo from "../assets/images/logo.png";
import { HiSquares2X2 } from "react-icons/hi2";
import { FaSearch } from "react-icons/fa";

function Navbar() {
  return (
    <div className="fixed bg-white inset-0 w-full h-[12vh] z-[1000]">
      <div className="flex items-center h-full justify-between  mx-auto w-[95%]">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" width={120} height={120} className="" />
          <p className="text-[#262728] font-medium font-sans">Characters</p>
        </div>

        <button className="p-1 focus:outline-none  items-center hidden sm:flex">
          <div className="relative flex items-center">
            <FaSearch className="absolute left-3 text-[#d0d2d3]" />
            <input
              type="text"
              className="pl-10 pr-4 py-2 rounded-full outline-none w-full bg-[#f6f6fa] text-sm font-medium font-sans"
              placeholder="Search Characters"
            />
          </div>
        </button>

        {/* Menu */}
        <div className="flex items-center space-x-3">
          <span className="text-[#26282A] font-medium ">Menu</span>
          <HiSquares2X2 className="w-5 h-5 cursor-pointer text-black" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
