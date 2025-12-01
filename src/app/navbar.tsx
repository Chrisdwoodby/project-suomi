"use client";

import Link from 'next/link';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';

export default function Navbar() {
  const closeOffCanvas = function() {
    console.log('clicked')
    const offcanvas = document.getElementById("offcanvas");
    const body = document.body;
    const html = document.documentElement;
    if (offcanvas && html && body) {
      offcanvas.classList.remove("open");
      html.classList.remove('offcanvas-open');
      body.classList.remove('offcanvas-open');
    }
  }
  useEffect(() => {
    const offcanvas = document.getElementById("offcanvas");
    const toggleButton = document.getElementById("toggleButton");

    if (!offcanvas || !toggleButton) {
      return;
    }
    const body = document.body;
    const html = document.documentElement;
    toggleButton.addEventListener("click", () => {
      if (!offcanvas.classList.contains('open')) {
        offcanvas.classList.add("open");
        html.classList.add('offcanvas-open');
        body.classList.add('offcanvas-open');
      } else {
        offcanvas.classList.remove("open");
        html.classList.remove('offcanvas-open');
        body.classList.remove('offcanvas-open');
      }
    });

    document.addEventListener("click", (event) => {
      const target = event.target;
      if (target instanceof Node && !offcanvas.contains(target) && target !== toggleButton) {
        offcanvas.classList.remove("open");
      }
    }); 
    const main = document.querySelector('.main') as HTMLElement | null;
    const navBar = document.querySelector('.navigation') as HTMLElement | null;

  if (main && navBar) {
    const navHeight = navBar.offsetHeight;

    var isMobile = Math.min(window.screen.width, window.screen.height) < 768 || navigator.userAgent.indexOf("Mobi") > -1;

    if (isMobile) {
      navBar.classList.add('sticky-at-top');
      return;
    }
    window.addEventListener("scroll", function(){
      if(window.scrollY==0){
        navBar.classList.remove('sticky-at-top');
      } else {
        navBar.classList.add('sticky-at-top');
      }
    });
}   
  }, []);
  return (
    <div role="navigation" className="navigation">
      <div className="nav-inner">
      <div className="container nav-container">
        <div className="row">
        <div className="col-md-6 col-sm-9">
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
        <div className="col-md-6 col-sm-3 nav-links">
          <nav className="desktop-nav">
            <Link href="/">Home</Link>
            <Link href="/services">services</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <a className="company-cta">Get Started</a>
          </nav>
          <div className="mobile-nav-button">
            <button id="toggleButton" className="btn">
              <span className="mobile-menu-bar"></span>
              <span className="mobile-menu-bar"></span>
              <span className="mobile-menu-bar"></span>
            </button>
          </div>
          <div role="" id="offcanvas" className="offcanvas">
            {/* <div className="offcanvas-header">
              <h5>Offcanvas Right</h5>
              <button id="closeButton" className="btn-close" aria-label="Close">
                
              </button>
            </div> */}
            <div className="offcanvas-body">
              <nav className="mobile-nav">
                <Link onClick={closeOffCanvas} href="/">Home</Link>
                <Link onClick={closeOffCanvas} href="/services">services</Link>
                <Link onClick={closeOffCanvas} href="/about">About</Link>
                <Link onClick={closeOffCanvas} href="/contact">Contact</Link>
                <a onClick={closeOffCanvas} className="company-cta">Get Started</a>
              </nav>
            </div>
          </div>
        </div>
        </div>
      </div>
      </div>
    </div>
  );
}