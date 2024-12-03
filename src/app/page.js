import JobCard from "@/components/JobCard";
import SearchBar from "@/components/Searchbar";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-7">
      <SearchBar />

      <div className="flex lg:w-[90%] sm:w-[100%] md:w-full justify-center flex-wrap gap-4">
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
      </div>
    </div>
  );
}
