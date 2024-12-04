import React from "react";
import { FiSearch } from "react-icons/fi";

const DynamicMenu = ({ visible, jobs, setInputValue, setIsFocused }) => {
  if (!visible) return null;

  const handleClick = (job) => {
    setInputValue(job)
    setIsFocused(false)
  }

  return (
    <div className="absolute top-full left-0 right-0 bg-white shadow-lg rounded-md mt-1 z-10 p-3 border">
      <ul>
        {jobs.length > 0 ? (
          jobs.map((job, index) => (
            <li
              key={index}
              onClick={()=> { handleClick(job) }}
              className="p-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2 overflow-hidden"
            >
              <FiSearch className="text-xl text-[#0a65cc] mr-2 text-ellipsis flex-shrink-0" />
              <span className="text-ellipsis overflow-hidden whitespace-nowrap">
                {job}
              </span>
            </li>
          ))
        ) : (
          <li className="p-2 text-gray-500">No jobs found</li>
        )}
      </ul>
    </div>
  );
};

export default DynamicMenu;
