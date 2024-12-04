import { parseJobsData } from '../lib/utils/parseJobsData';

export async function fetchJobsData(offset = 1) {
  const res = await fetch(`https://remote-jobs.remote-jobs-legacy.workers.dev/jobs?offset=${offset}`);
  if (!res.ok) {
    throw new Error('Failed to fetch jobs');
  }

  const html = await res.text();
  return parseJobsData(html);
}
