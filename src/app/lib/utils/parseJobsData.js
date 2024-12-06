// lib/utils/parseJobsData.js
import { load } from 'cheerio';

// Utility function to extract keywords from the description
const extractKeywords = (description = '', tags = []) => {
  const keywordsFromDescription = description.match(/\b\w{4,}\b/g) || []; // Words longer than 3 characters
  return Array.from(new Set([...keywordsFromDescription, ...tags]));
};

export function parseJobsData(html) {
  const $ = load(html);
  const jobsData = []; // Array to store job data

  $('script[type="application/ld+json"]').each((index, element) => {
    try {
      const jobData = JSON.parse($(element).html());

      // Ensure it's a JobPosting type
      if (jobData['@type'] !== 'JobPosting') return;

      const {
        title = 'N/A',
        hiringOrganization = {},
        applicantLocationRequirements = [],
        jobLocation = [{}],
        baseSalary = {},
        employmentType = 'N/A',
        description = 'N/A',
        validThrough = 'N/A',
        datePosted = 'N/A',
      } = jobData;

      const companyName = hiringOrganization?.name || 'No Company';
      const companyLogo = hiringOrganization?.logo || 'N/A';
      const companyUrl = hiringOrganization?.url || 'N/A';

      const location = applicantLocationRequirements?.[0]?.name || 'REMOTE';
      const addressRegion = jobLocation?.[0]?.address?.addressCountry || 'N/A';
      const addressPostalCode = jobLocation?.[0]?.address?.postalCode || 'N/A';

      const salary = baseSalary?.value
        ? `$${baseSalary.value.minValue || 'N/A'} - $${baseSalary.value.maxValue || 'N/A'}`
        : 'Not mentioned';

      // Extract keywords from description
      const keywords = extractKeywords(description);

      // Push structured data to the jobsData array
      jobsData.push({
        title,
        companyName,
        companyLogo,
        companyUrl,
        location,
        addressRegion,
        addressPostalCode,
        salary,
        employmentType,
        description,
        validThrough,
        keywords,
        datePosted,
      });
    } catch (error) {
      console.error('Error parsing JSON-LD data:', error);
    }
  });

  return jobsData;
}
