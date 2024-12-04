// api/fetchJobs.js
import { parseJobsData } from '../lib/utils/parseJobsData';

export async function fetchJobsData() {
  const res = await fetch('https://remote-jobs.remote-jobs-legacy.workers.dev/jobs?offset=1');
  if (!res.ok) {
    throw new Error('Failed to fetch jobs');
  }

  const html = await res.text();
  return parseJobsData(html);
}
