"use client";

// components/Navbar.tsx
import Link from 'next/link';
import Image from 'next/image';
// import logo from './Media/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';

export default function Navbar() {
  useEffect(() => {
    const main = document.querySelector('.main') as HTMLElement | null;
    const navBar = document.querySelector('.navigation') as HTMLElement | null;
    if (main && navBar) {
      const sentinel = document.createElement('main');
    
      sentinel.className = 'nav-sentinel';
      navBar?.parentNode?.insertBefore(sentinel, navBar);
    
      const observer = new IntersectionObserver(([entry]) => {
        if (!navBar) return;
    
        if (entry.intersectionRatio === 0) {
          navBar.classList.add('sticky-at-top');
        } else {
          navBar.classList.remove('sticky-at-top');
        }
      });
    
      observer.observe(sentinel);
    }


    const offcanvas = document.getElementById("offcanvas");
    const toggleButton = document.getElementById("toggleButton");
    const closeButton = document.getElementById("closeButton");

    if (!offcanvas || !toggleButton || !closeButton) {
      return;
    }

    // Toggle offcanvas visibility
    toggleButton.addEventListener("click", () => {
      offcanvas.classList.add("open");
    });

    // Close offcanvas
    closeButton.addEventListener("click", () => {
      offcanvas.classList.remove("open");
    });

    // Optional: Close when clicking outside the offcanvas
    document.addEventListener("click", (event) => {
      const target = event.target;
      if (target instanceof Node && !offcanvas.contains(target) && target !== toggleButton) {
        offcanvas.classList.remove("open");
      }
    });    
  }, []);
  return (
    <div role="navigation" className="navigation">
      <div className="container nav-container">
        <div className="col-md-6">
          {/* <img className="logo" src='/images/logo.png' alt="company logo"/> */}

          <div className="logo-container" aria-label="company-logo">
            <div className="logo-left">
              <span className="logo-title focus-in-expand">Chris Wooodby</span>
              <span className="logo-secondary">Web Design</span>
            </div>
            <div className="logo-right">
              <span className="logo-icon bounce-in-top"></span>
            </div>
          </div>

        </div>
        <div className="col-md-6 nav-links">
        <div className="mobile-nav">
        <button id="toggleButton" className="btn">
          Toggle Right Offcanvas
        </button>
      </div>
      <div role="" id="offcanvas" className="offcanvas">
        <div className="offcanvas-header">
          <h5>Offcanvas Right</h5>
          <button id="closeButton" className="btn-close" aria-label="Close">
            ✖
          </button>
        </div>
        <div className="offcanvas-body">
          <p>This is the offcanvas content.</p>
        </div>
      </div>

        <nav className="desktop-nav">
          <Link href="/">Home</Link>
          <Link href="/services">services</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <a className="company-cta">Get Started</a>
        </nav>
        </div>
      </div>
    </div>
  );
}