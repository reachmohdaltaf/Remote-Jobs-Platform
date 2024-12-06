// app/layout.js or _app.js
"use client" // Ensure this is a client component

import './globals.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={queryClient}>
          <header className='sticky top-0 z-50'>
         
          </header>

          <main>
          {children}
          </main>

      
        </QueryClientProvider>
      </body>
    </html>
  );
}
