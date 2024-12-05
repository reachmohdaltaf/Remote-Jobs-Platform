"use client";
import { useState, useEffect} from 'react';
import { fetchJobsData } from '../api/fetchJobs';

export default function useFetchJobs() {
  const [jobs, setJobs] = useState([]);
  const [offset, setOffset] = useState(1); // Start offset for pagination
  const [hasMore, setHasMore] = useState(true); // Tracks if more data is available
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoreJobs = async () => {
    if (!hasMore || loading) return;

    setLoading(true);
    try {
      const newJobs = await fetchJobsData(offset); // Pass offset for pagination
      setJobs((prevJobs) => [...prevJobs, ...newJobs]);
      setOffset((prevOffset) => prevOffset + 1);
     
      if (newJobs.length === 0) setHasMore(false); // If no jobs are returned, stop loading
    } catch (err) {
      setError(err.message);
      setHasMore(false);
    } finally {
      setLoading(false);
    }
  };


  // Load initial jobs when the hook is first used
  useEffect(() => {
    fetchMoreJobs();
  }, []);

  return {
    jobs,
    loading,
    error,
    fetchMoreJobs,
    hasMore,
  };
}
