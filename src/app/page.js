"use client";
import { useState } from "react";
import JobCard from "./components/JobCard";
import Searchbar from "./components/SearchBar/Searchbar";
import useFetchJobs from "./hooks/useFetchJobs";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Home() {
  const [filterData, setFilterData] = useState({
    jobTitle: "",
  });

  const { jobs, loading, error, fetchMoreJobs, hasMore } = useFetchJobs();

  // Filter jobs based on jobTitle
  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(filterData.jobTitle.toLowerCase())
  );

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
