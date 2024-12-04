import React from "react";
import { FiSearch } from "react-icons/fi";
import { LuMapPin } from "react-icons/lu";
import Image from "next/image";
import location from '../../../public/location.png'

const Searchbar = () => {
  return (
    <div className="w-full flex justify-center mt-5 px-2 cursor-pointer">
      <div className="flex flex-col lg:flex-row w-full lg:w-[90%] border rounded-md">
        {/* Search by Job */}
        <div className="flex w-full items-center py-3 px-4 border-b lg:border-b-0 lg:border-r">
          <FiSearch className="text-xl text-[#0a65cc] mr-2" />
          <input
            type="text"
            placeholder="Search by: Job title, Position, Keyword..."
            className="p-2 px-1 outline-none placeholder:text-sm w-full"
          />
        </div>
        {/* Location */}
        <div className="flex items-center w-full py-3 px-4 border-b lg:border-b-0">
          <LuMapPin className="text-xl text-[#0a65cc] mr-2" />
          <input
            type="text"
            placeholder="City, state or country"
            className="p-2 px-1 outline-none placeholder:text-sm w-full"
          />
          <Image alt={location} src={location} width={24} height={24} />
        </div>
        {/* Find Job Button */}
        <div className="w-full lg:w-[40%] p-3">
          <button className="w-full rounded-sm h-10 lg:h-full text-white bg-[#0a65cc] hover:bg-[#084b93]">
            Find Job
          </button>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
