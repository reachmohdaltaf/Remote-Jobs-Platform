import React from 'react'
import Home from './pages/Home'
import toast, { Toaster } from "react-hot-toast";


const page = () => {
  return (
    <div>
      <Home/>
      <Toaster
  position="top-right"
  reverseOrder={false}
  toastOptions={{
    success: {
      style: {
        background: "#000000", // Sleek black background
        color: "#ffffff", // Crisp white text
        fontSize: "16px", // Readable font size
        fontWeight: "500", // Medium-weight for text
        borderRadius: "12px", // Smooth rounded corners
        padding: "16px 24px", // Spacious padding
        boxShadow: "0 8px 15px rgba(0, 0, 0, 0.3)", // Elegant shadow for depth
        border: "1px solid #ffffff", // Thin white border for sharp contrast
      },
      iconTheme: {
        primary: "#ffffff", // White icon color
        secondary: "#000000", // Black background for the icon
      },
      duration: 2000, // Custom duration (in milliseconds), e.g., 5000ms = 5 seconds
    },
    error: {
      style: {
        background: "#000000", // Sleek black background
        color: "#ffffff", // Crisp white text
        fontSize: "16px", // Readable font size
        fontWeight: "500", // Medium-weight for text
        borderRadius: "12px", // Smooth rounded corners
        padding: "16px 24px", // Spacious padding
        boxShadow: "0 8px 15px rgba(0, 0, 0, 0.3)", // Elegant shadow for depth
        border: "1px solid #ffffff", // Thin white border for sharp contrast
      },
      iconTheme: {
        primary: "#ffffff", // White icon color
        secondary: "#000000", // Black background for the icon
      },
      duration: 2000, // Custom duration (in milliseconds), e.g., 5000ms = 5 seconds
    },
  }}
/>
    </div>
  )
}

export default page
