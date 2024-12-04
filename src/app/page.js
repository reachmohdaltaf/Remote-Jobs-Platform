// pages/Home.js
"use client"
import JobCard from './components/JobCard';
import Searchbar from './components/Searchbar';
import useFetchJobs from './hooks/useFetchJobs';

export default function Home() {
  const { jobs, loading, error } = useFetchJobs();

  return (
    <div className="flex flex-col items-center gap-7">
      <Searchbar />
      <div className="flex lg:w-[90%] sm:w-[100%] md:w-full justify-center flex-wrap gap-4">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : jobs.length > 0 ? (
          jobs.map((job, index) => <JobCard key={index} job={job} />)
        ) : (
          <p>No jobs found</p>
        )}
      </div>
    </div>
  );
}
