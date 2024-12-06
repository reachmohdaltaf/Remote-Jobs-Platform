# Remote Job Listing Platform

The **Remote Job Listing Platform** is a modern, responsive web application designed to provide job seekers with an intuitive interface to explore remote job opportunities. This project is part of the **Explorin x IntelxLabs Frontend Engineering Internship Task** and showcases my ability to transform legacy HTML API responses into a dynamic, user-friendly web platform.

## Live Demo

You can view the live version of the project here:  
[Remote Job Listing Platform](https://remote-jobs-platform.vercel.app/)

## Key Features

### Core Functionality

- **HTML Parsing**:  
  - Extracted structured job data from legacy HTML API responses, including job titles, locations, salaries, and descriptions.  
  - Built support for multiple legacy API response formats and implemented robust error handling for malformed or inconsistent data.

- **Job Listing Page**:  
  - Designed a pixel-perfect UI based on the provided Figma designs to ensure consistency with the intended user experience.  
  - Developed responsive layouts that adapt seamlessly to both desktop and mobile devices.  
  - Integrated infinite scrolling for an uninterrupted job browsing experience.

- **Advanced Filtering**:  
  - Added real-time filtering functionality to search jobs based on keywords, locations, and salary ranges.  
  - Ensured smooth synchronization between filtering options and infinite scrolling, enabling efficient job browsing.

- **State Management**:  
  - Utilized **React Query** for efficient data fetching, caching, and state management.  
  - Implemented loading indicators and error handling for a seamless user experience when interacting with the API.

### Extended Features

- **Accessibility Enhancements**:  
  - Enabled keyboard navigation for essential actions, ensuring a more inclusive experience for users with disabilities.

- **Job Bookmarking**:  
  - Integrated **localStorage** functionality to allow users to save and bookmark job listings for easy access later.

## Technologies Used

- **Next.js**: Framework for building the web application with server-side rendering capabilities for faster page loads and improved SEO.  
- **Tailwind CSS**: A utility-first CSS framework for rapid styling and consistent design.  
- **React Query**: For efficient API data fetching, caching, and global state management.  
- **Headless UI**: Provides accessible, unstyled UI components to ensure a consistent user experience.  
- **Vercel**: For deployment and hosting, ensuring fast and reliable access to the platform.

## Installation Guide

### Prerequisites

Ensure you have the following installed on your local machine:
- **Node.js** (version >= 16.x)

### Steps to Get Started

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/your-username/remote-job-listing.git
2. Install the project dependencies:
   ```bash
   npm install
3. Run the development server:
   ```bash
    npm run dev
4. Install the project dependencies:
   ```bash
   npm instal
5. Open your browser and visit:
   ```bash
   http://localhost:3000

## Usage

Once the application is running, users can:

- Browse job listings with infinite scrolling.
- Apply filters to search jobs by keyword, location, and salary.
- Bookmark jobs for later reference.
- Navigate the site using keyboard shortcuts.


## Deployment

The project is hosted on Vercel, which ensures fast and reliable access to the platform. After deploying the project, you can access the live demo at Remote Job Listing Platform.

## Frontend Architecture

The project follows a React-based architecture built with Next.js. It uses the React Query library for efficient data fetching and state management, while Tailwind CSS is employed for responsive design and styling. Components are designed to be reusable, and the application is optimized for both desktop and mobile devices.

## Future Improvements

- **Add job details page**: Currently, users can view job listings but do not have access to detailed information. A job details page could improve the user experience.
- **Improve search functionality**: Adding more advanced search options and sorting features, such as filtering by job type or experience level.
- **User authentication**: Integrate user authentication to allow users to log in and manage their job bookmarks across devices.
- **Performance optimization**: Continue improving the performance of the app, particularly focusing on faster data loading and rendering.












