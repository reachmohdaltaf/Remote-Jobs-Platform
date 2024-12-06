import React, { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";

const DynamicMenu = ({ visible, jobs, setInputValue, setIsFocused }) => {
  const [selectedIndex, setSelectedIndex] = useState(-1); // Track selected index

  // Reset selectedIndex when jobs change
  useEffect(() => {
    setSelectedIndex(-1);
  }, [jobs]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!visible || jobs.length === 0) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % jobs.length);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + jobs.length) % jobs.length);
      } else if (e.key === "Enter" && selectedIndex !== -1) {
        e.preventDefault();
        setInputValue(jobs[selectedIndex]); // Update input value
        setIsFocused(false); // Remove focus
        setSelectedIndex(-1); // Reset selection
      } else if (e.key === "Escape") {
        setIsFocused(false); // Close the dropdown on Escape
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [visible, jobs, selectedIndex, setInputValue, setIsFocused]);

  const handleClick = (job) => {
    setInputValue(job); // Update input value
    setIsFocused(false); // Remove focus
  };

  return (
    visible && (
      <div className="absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-md z-10 p-3 border">
        <ul>
          {jobs.length > 0 ? (
            jobs.map((job, index) => (
              <li
                key={index}
                onClick={() => handleClick(job)}
                className={`p-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2 overflow-hidden ${
                  selectedIndex === index ? "bg-gray-200" : ""
                }`}
              >
                <FiSearch className="text-xl text-[#0a65cc] mr-2 flex-shrink-0" />
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
    )
  );
};

export default DynamicMenu;
