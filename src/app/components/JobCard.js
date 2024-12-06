import React, { useState } from 'react';
import Image from 'next/image';
import { LuMapPin } from 'react-icons/lu';

const JobCard = ({ job }) => {
  const jobId = job.id || job.title; 
  console.log(job);

  const [isBookmarked, setIsBookmarked] = useState(() => {
    const bookmarkedJobs = JSON.parse(localStorage.getItem('bookmarkedJobs')) || [];
    return bookmarkedJobs.includes(jobId);  
  });

  const toggleBookmark = () => {
    setIsBookmarked((prev) => {
      const newBookmarkState = !prev;
      const bookmarkedJobs = JSON.parse(localStorage.getItem('bookmarkedJobs')) || [];

      if (newBookmarkState) {
        // Add to bookmarks
        bookmarkedJobs.push(jobId);
      } else {
        // Remove from bookmarks
        const index = bookmarkedJobs.indexOf(jobId);
        if (index > -1) {
          bookmarkedJobs.splice(index, 1);
        }
      }

      // Save updated bookmarks to localStorage
      localStorage.setItem('bookmarkedJobs', JSON.stringify(bookmarkedJobs));
      return newBookmarkState;
    });
  };

  return (
    <div className="border rounded-md w-full sm:w-[48%] md:w-[32%] min-w-[22rem] flex flex-col gap-3 hover:bg-gradient-to-r cursor-pointer hover:from-[#fff6e7] p-4 shadow-sm hover:shadow-md transition duration-200 ease-in-out">
      {/* Job Title */}
      <div className="flex flex-col">
        <h2 className="font-medium text-base sm:text-lg lg:text-md text-gray-800">
          {job.title || 'No Job Title'}
        </h2>

        {/* Job Details */}
        <h2 className="flex items-center gap-2">
          <span className="bg-[#e7f6ea] text-xs text-[#42b55b] font-semibold px-2 py-1 rounded-md">
            {job.remote || 'Remote'}
          </span>
          <span className="text-gray-500 sm:text-sm lg:text-xs">
            Salary: {job.salary || 'Not mentioned'}
          </span>
        </h2>
      </div>

      {/* Company and Location */}
      <div className="flex items-start justify-between">
        {/* Company Logo */}
        <div className="flex gap-3 items-center">
          <Image
            src={job.companyLogo?.url || '/google_logo.png'} // Use job.companyLogo if available
            alt="Company Logo"
            width={44}
            height={44}
            className="object-contain mt-1"
          />

          {/* Company Details */}
          <div className="flex flex-col">
            <h2 className="font-medium text-sm sm:text-[0.9rem] sm:text-base text-gray-700">
              {job.companyName || 'No Company'}
            </h2>
            <div className="flex gap-1 items-center">
              <LuMapPin className="text-[#646b75]" />
              <span className="text-[#767f8c] lg:text-[0.7rem] sm:text-sm">
                {job.location || 'Location not specified'}
              </span>
            </div>
          </div>
        </div>

        {/* Bookmark Icon */}
        <div
          className="flex lg:w-16 md:w-10 sm:w-10 items-center justify-end mt-1 cursor-pointer"
          onClick={toggleBookmark}
        >
          <Image
            src={isBookmarked ? "/bookmark-filled.png" : "/bookmark-unfilled.png"}
            alt="Bookmark Icon"
            width={20}
            height={20}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default JobCard;
