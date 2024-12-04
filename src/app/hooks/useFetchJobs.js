// hooks/useFetchJobs.js
"use client"
import { useQuery } from '@tanstack/react-query';
import { fetchJobsData } from '../api/fetchJobs';

export default function useFetchJobs() {
  // Use the new object format for useQuery
  const { data: jobs, isLoading, isError, error } = useQuery({
    queryKey: ["jobs"], 
    queryFn: fetchJobsData, 
    retry: 1, 
    refetchOnWindowFocus: false, 
  });

  return {
    jobs,
    loading: isLoading,
    error: isError ? error.message : null,
  };
}
