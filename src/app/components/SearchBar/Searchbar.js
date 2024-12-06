import React, { useState, useRef, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { LuMapPin } from "react-icons/lu";
import Image from "next/image";
import FilterMenu from "./FilterMenu";
import DynamicMenu from "./DynamicMenu";
import location from "../../../../public/location.png";
import LocationMenu from "./LocationMenu";

const Searchbar = ({ jobs, setFilterData }) => {
  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [selectedTags, setSelectedTags] = useState([]);
  const [salaryRange, setSalaryRange] = useState("");
  const [locationInput, setLocationInput] = useState("");
  const [isLocationFocused, setIsLocationFocused] = useState(false);

  const searchbarRef = useRef(null);



  const jobTitles = jobs.map((job) => job.title);
  const filteredJobs = jobTitles
    .filter((title) => title.toLowerCase().includes(inputValue.toLowerCase()))
    .slice(0, 8);

  const removeTag = (tag) => {
    setSelectedTags(selectedTags.filter((t) => t !== tag));
  };

  const handleSubmit = (e) => {
    setIsLocationFocused(false)
    setIsFocused(false)
    e.preventDefault();
    setFilterData({
      jobTitle: inputValue,
      price: salaryRange,
      location: locationInput,
    });
  };

  // Function to reset all filters and input values
  const resetFilters = () => {
    setInputValue("");
    setSalaryRange("");
    setSelectedTags([]);
    setFilterData({
      jobTitle: "",
      price: "",
      location: "",
    });
  };

  const resetLocationInput = () => {
   setLocationInput("")
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchbarRef.current &&
        !searchbarRef.current.contains(event.target)
      ) {
        setIsFocused(false);
        setIsLocationFocused(false);
      }
    };
    

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle pressing ENTER globally to submit the form
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        handleSubmit(e); // Call handleSubmit when ENTER is pressed
        setIsFocused(true)
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [inputValue, locationInput, salaryRange, selectedTags]);

  return (
    <div
      className="w-full flex justify-center mt-2 px-2 cursor-pointer"
      ref={searchbarRef}
    >
      <div className="flex flex-col lg:flex-row w-full lg:w-[90%] border rounded-t-md relative">
        {/* Job Search Input */}
        <div className="flex w-full items-center py-3 px-4 border-b lg:border-b-0 lg:border-r relative flex-wrap gap-2">
          <FiSearch className="text-xl text-[#0a65cc] mr-2" />
          <input
            type="text"
            placeholder="Search by: Job title, Position, Keyword..."
            className="p-2 px-1 outline-none placeholder:text-sm pr-5  flex-grow"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onFocus={() => {
              setIsFocused(true);
              setIsLocationFocused(false);
            }}
          />
          {inputValue && (
            <button
              onClick={resetFilters} // Reset function when "X" is clicked
              className="absolute right-2   text-3xl text-gray-400"
            >
              &times;
            </button>
          )}
          {isFocused && (
            <>
              {inputValue.trim() === "" ? (
                <FilterMenu
                  visible={true}
                  selectedTags={selectedTags}
                  setSelectedTags={setSelectedTags}
                  setSalaryRange={setSalaryRange}
                />
              ) : (
                <DynamicMenu
                  visible={true}
                  jobs={filteredJobs}
                  setInputValue={setInputValue}
                  setIsFocused={setIsFocused}
                  setSelectedTags={setSelectedTags}
                />
              )}
            </>
          )}
        </div>
        {/* Location Input */}
        <div className="flex items-center w-full py-3 px-4 border-b lg:border-b-0 relative">
          <LuMapPin className="text-xl text-[#0a65cc] mr-2" />
          <input
            type="text"
            placeholder="City, state or country"
            className="p-2  pr-10 px-1 outline-none placeholder:text-sm w-full"
            value={locationInput}
            onChange={(e) => setLocationInput(e.target.value)}
            onFocus={() => {
              setIsLocationFocused(true);
              setIsFocused(false);
            }}
          />
           {locationInput && (
            <button
              onClick={resetLocationInput} // Reset function when "X" is clicked
              className="absolute right-12 top-3 text-3xl text-gray-400"
            >
              &times;
            </button>
          )}
          {isLocationFocused && (
            <LocationMenu
              visible={true}
              inputValue={locationInput}
              setInputValue={setLocationInput}
              setIsFocused={setIsLocationFocused}
            />
          )}
          <Image
            alt="location icon"
            src={location}
            width={24}
            height={24}
            className={`${
              isLocationFocused ? "scale-125 transition" : ""
            }`}
          />
        </div>
        {/* Find Job Button */}
        <div className="w-full lg:w-[40%] p-3">
          <button
            onClick={handleSubmit}
            className="w-full rounded-sm h-10 lg:h-full text-white bg-[#0a65cc] hover:bg-[#084b93]"
          >
            Find Job
          </button>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
