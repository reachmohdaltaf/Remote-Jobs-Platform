# Remote Job Listing Platform

The **Remote Job Listing Platform** is a modern, responsive web application that transforms legacy HTML API responses into a dynamic, user-friendly interface for job seekers. This project is a part of the **Explorin x IntelxLabs Frontend Engineering Internship Task** and addresses critical challenges in building a next-generation remote job platform.

## Key Features

### Core Functionality

- **HTML Parsing**:  
  - Parsed HTML responses from a legacy API to extract structured job data, including titles, locations, salaries, and descriptions.  
  - Implemented support for multiple legacy API response formats and handled malformed or inconsistent data gracefully.

- **Job Listing Page**:  
  - Developed a pixel-perfect UI based on provided Figma designs.  
  - Implemented responsive layouts optimized for desktop and mobile.  
  - Added infinite scrolling for seamless job browsing.  

- **Advanced Filtering**:  
  - Integrated filters for keywords, locations, and salary ranges.  
  - Ensured real-time filter updates and smooth synchronization with infinite scrolling.

- **State Management**:  
  - Used **React Query** for efficient data fetching, caching, and state management.  
  - Added error handling and loading indicators for a seamless user experience.

### Extended Features

- **Accessibility**: Enabled keyboard navigation for key actions.  
- **Job Bookmarking**: Implemented `localStorage` to save preferred job listings for users.  

## Technologies Used

- **Next.js**: Framework for building the application with server-side rendering capabilities.  
- **Tailwind CSS**: Utility-first CSS framework for rapid and consistent styling.  
- **React Query**: For API integration, caching, and managing app state.  
- **Headless UI**: For accessible, unstyled UI components.  
- **Vercel**: For deployment and hosting.

## Installation

### Prerequisites

- Node.js (>= 16.x)

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/remote-job-listing.git
