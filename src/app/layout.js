// app/layout.js or _app.js
"use client" // Ensure this is a client component

import './globals.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const queryClient = new QueryClient();

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={queryClient}>
          <header className='sticky top-0 z-50'>
          <Navbar/>
          </header>

          <main>
          {children}
          </main>

          <footer className='sticky bottom-0 hidden'>
          <Footer/>
          </footer>
        </QueryClientProvider>
      </body>
    </html>
  );
}
