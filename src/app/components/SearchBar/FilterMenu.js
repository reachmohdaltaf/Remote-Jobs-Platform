import React, { useState } from "react";
import { FaArrowTrendUp } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

const FilterMenu = ({ visible, selectedTags, setSelectedTags, setSalaryRange}) => {

  if (!visible) return null;

  const tags = [
    "Development",
    "DevOps",
    "Machine Learning",
    "Cybersecurity",
    "Artificial Intelligence",
    "Cloud Computing",
    "Programming",
    "Technology",
    "Web Development",
    "Data Science",
    "App Development",
  ];

  const handleChange = (e) => {
    setSalaryRange(e.target.value)
  }

  const toggleTag = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  return (
    <div className="absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-md z-10 p-3 border">
      <div className="flex flex-col gap-3 mt-5 mb-5">
        <p className="text-xs text-gray-700 ml-2 flex items-center gap-1 font-medium">
          Filter
          <IoIosArrowDown className="text-gray-600" />
        </p>
        <div className="ml-2 flex items-center gap-3 relative">
        
          <select  className="bg-gray-100 text-sm  text-gray-500 px-5 py-2 w-fit rounded-md outline-none cursor-pointer"
            onChange={handleChange}>
            <option value="">Select Salary Range</option>
            <option value="0-25000">₹0 - ₹25,000</option>
            <option value="25001-50000">₹25,001 - ₹50,000</option>
            <option value="50001-75000">₹50,001 - ₹75,000</option>
            <option value="75001-100000">₹75,001 - ₹1,00,000</option>
            <option value="100001+">₹1,00,001 and above</option>
          </select>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-xs text-gray-700 ml-2 flex items-center gap-1 font-medium">
          Popular
          <FaArrowTrendUp className="text-gray-600" />
        </p>
        <div className="flex gap-2 flex-wrap">
          {tags.map((tag) => (
            <span
              key={tag}
              className={`px-3 py-1 rounded-full text-sm cursor-pointer ${
                selectedTags.includes(tag)
                  ? "bg-blue-100 text-blue-600 hover:bg-blue-200"
                  : "bg-gray-100 text-gray-600 hover:text-gray-800 hover:bg-gray-200"
              }`}
              onClick={() => toggleTag(tag)}
            >
              {tag}
              {selectedTags.includes(tag) && (
                <IoClose className="inline ml-1" />
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterMenu;
