"use client";
import { useState } from "react";
import JobCard from "./components/JobCard";
import Searchbar from "./components/SearchBar/Searchbar";
import useFetchJobs from "./hooks/useFetchJobs";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Home() {
  const [filterData, setFilterData] = useState({
    jobTitle: "",
    price: "",
    location: "",
  });

  const { jobs, loading, error, fetchMoreJobs, hasMore } = useFetchJobs();

  const filteredJobs = jobs.filter((job) => {
    const { jobTitle, price, location } = filterData;

    // Match job title
    const matchesTitle = job.title
      .toLowerCase()
      .includes(jobTitle.toLowerCase());

    // Match salary range if provided
    let matchesSalary = true; // Default to true if no salary range is selected
    if (price) {
      const [minSalary, maxSalary] = price
        .split("-")
        .map((value) => (value === "+" ? Infinity : parseInt(value, 10))); // Parse salary range
      const jobSalary = job.salary; // Assuming job.salary is a numeric value
      matchesSalary =
        jobSalary >= minSalary &&
        (maxSalary === Infinity || jobSalary <= maxSalary);
    }

    // Match location if provided
    const matchesLocation = location
      ? job.location.toLowerCase().includes(location.toLowerCase())
      : true; // Default to true if no location filter is set

    return matchesTitle && matchesSalary && matchesLocation;
  });

  return (
    <div className="flex flex-col items-center gap-7">
      {/* Pass jobs to Searchbar */}
      <Searchbar jobs={jobs} setFilterData={setFilterData} />
      <div className="flex lg:w-[90%] sm:w-[100%] md:w-full justify-center flex-wrap gap-4">
        {loading && jobs.length === 0 ? (
          <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <InfiniteScroll
            dataLength={filteredJobs.length} // Use filtered jobs
            next={fetchMoreJobs}
            hasMore={hasMore}
            loader={
              !loading ? (
                ""
              ) : (
                <div className="lds-hello lds-ring">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              )
            }
            endMessage={<p>No more jobs to load</p>}
          >
            <div className="flex flex-wrap justify-center gap-4">
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
