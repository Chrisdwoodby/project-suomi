// app/layout.tsx
import Navbar from '@/app/navbar';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from '@/app/footer';
import './globals.css';

import { Html, Head, Main, NextScript } from 'next/document';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300..700&display=swap" rel="stylesheet"></link>
      </head>
      <body>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}