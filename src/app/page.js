"use client";
import JobCard from './components/JobCard';
import Searchbar from './components/Searchbar';
import useFetchJobs from './hooks/useFetchJobs';
import InfiniteScroll from 'react-infinite-scroll-component';

export default function Home() {
  const { jobs, loading, error, fetchMoreJobs, hasMore } = useFetchJobs();

  return (
    <div className="flex flex-col items-center gap-7">
      <Searchbar />
      <div className="flex lg:w-[90%] sm:w-[100%] md:w-full justify-center flex-wrap gap-4">
        {loading && jobs.length === 0 ? (
          <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <InfiniteScroll
            dataLength={jobs.length}
            next={fetchMoreJobs}
            hasMore={hasMore}
            loader={!loading? "" :<div class="lds-hello lds-ring"><div></div><div></div><div></div><div></div></div>}
            endMessage={<p>No more jobs to load</p>}
          >
            <div className="flex flex-wrap justify-center gap-4">
              {jobs.map((job, index) => (
                <JobCard key={index} job={job} />
              ))}
            </div>
          </InfiniteScroll>
        )}
      </div>
    </div>
  );
}
