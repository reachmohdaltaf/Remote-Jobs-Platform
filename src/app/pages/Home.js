"use client";
import { useState } from "react";
import JobCard from "../components/JobCard";
import Searchbar from "../components/SearchBar/Searchbar";
import useFetchJobs from "../hooks/useFetchJobs";
import InfiniteScroll from "react-infinite-scroll-component";
import Navbar from "../components/Navbar"; // Import Navbar component

export default function Home() {
  const [filterData, setFilterData] = useState({
    jobTitle: "",
    price: "",
    location: "",
    keywords: [], // Array of selected keywords/tags
  });

  

  const { jobs, loading, error, fetchMoreJobs, hasMore } = useFetchJobs();

 const filteredJobs = jobs.filter((job) => {
  const { jobTitle, price, location, keywords } = filterData;

  const matchesTitle = job.title
    .toLowerCase()
    .includes(jobTitle.toLowerCase());

  let matchesSalary = true;
  if (price) {
    const [minSalary, maxSalary] = price
      .split("-")
      .map((value) => (value === "+" ? Infinity : parseInt(value, 10)));

    const salaryRange = job.salary.replace(/[^0-9-]/g, '').split(' - ');
    const jobMinSalary = parseInt(salaryRange[0], 10);
    const jobMaxSalary = salaryRange.length > 1 ? parseInt(salaryRange[1], 10) : jobMinSalary;

    matchesSalary =
      (jobMinSalary >= minSalary && jobMaxSalary <= maxSalary) ||
      (maxSalary === Infinity && jobMinSalary >= minSalary);
  }

  const matchesLocation = location
    ? job.location.toLowerCase().includes(location.toLowerCase())
    : true;
  
    const matchesKeywords =
    (!Array.isArray(filterData.keywords) || filterData.keywords.length === 0) ||
    filterData.keywords.some((keyword) => job.keywords.includes(keyword));
  
  

  return matchesTitle && matchesSalary && matchesLocation && matchesKeywords;
});

  

  return (
    <div className="home-container flex flex-col items-center gap-7">
      {/* Pass setFilterData to Navbar */}
      <Navbar setFilterData={setFilterData} />

      {/* Searchbar component for filtering jobs */}
      <Searchbar jobs={jobs} setFilterData={setFilterData} />

      {filteredJobs.length === 0 && !loading && !error && (
        <p className="no-jobs-found-message">No Jobs Found</p>
      )}

      {/* Job cards container */}
      <div className="jobs-container flex lg:w-[90%] sm:w-[100%] md:w-full justify-center flex-wrap gap-4">
        {loading && jobs.length === 0 ? (
          <div className="loading-spinner lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        ) : error ? (
          <p className="error-message">{error}</p>
        ) : (
          <InfiniteScroll
            dataLength={filteredJobs.length}
            next={fetchMoreJobs}
            hasMore={hasMore}
            loader={
              !loading ? (
                ""
              ) : (
                <div className="loading-spinner lds-hello lds-ring">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              )
            }
            endMessage={<p className="end-message">No more jobs to load</p>}
          >
            <div className="job-cards-container flex flex-wrap justify-center gap-4">
              {filteredJobs.map((job, index) => (
                <JobCard key={index} job={job} />
              ))}
            </div>
          </InfiniteScroll>
        )}
      </div>
    </div>
  );
}
