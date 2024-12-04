// lib/utils/parseJobsData.js
import { load } from 'cheerio';

export function parseJobsData(html) {
  const $ = load(html);
  const jobsData = [];

  $('script[type="application/ld+json"]').each((index, element) => {
    try {
      const jobData = JSON.parse($(element).html());

      const title = jobData.title;
      const company = jobData.hiringOrganization?.name || 'No Company';
      const location = jobData.jobLocation?.address?.addressCountry || 'Location not specified';
      const salary = jobData.baseSalary?.value?.minValue || 'Not mentioned';

      if (title && company) {
        jobsData.push({ title, company, location, salary });
      }
    } catch (error) {
      console.error('Error parsing JSON data:', error);
    }
  });

  return jobsData;
}
