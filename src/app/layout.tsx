// app/layout.tsx
import Navbar from '@/app/navbar';
import Footer from '@/app/footer';
import 'bootstrap/dist/css/bootstrap.css';
import './globals.css';
import { useEffect } from 'react';

export const metadata = {
  title: 'My App', // Optional, set your site title
  description: 'My Next.js 13 App', // Optional description
};

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en">
      <head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
