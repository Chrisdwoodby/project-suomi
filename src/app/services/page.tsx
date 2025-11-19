"use client"; 
import Navbar from '@/app/navbar';
import { useState, useEffect } from 'react';
export default function Page() {
  let serviceList = ['SEO', 'Accessibility', 'Custom Development', 'Hosting'];
  let index = 0;
  useEffect(() => {
    const heroText = document.querySelector('.hero-text-cycle') as HTMLElement | null;
    if (!heroText) return; 
    heroText.classList.add('text-fade'); 

    const changeText = () => {

      heroText.classList.add('text-hidden');

      setTimeout(() => {
        if (index === 3) {
          index = 0;
        }
        heroText.innerHTML = serviceList[index];
        index ++;
  
        heroText.classList.remove('text-hidden'); 
      }, 600);
    }
    changeText();

    const interval = setInterval(changeText, 4000);
  
    return () => clearInterval(interval);

  }, []); 
    return (
      <div>
          <div className="services-hero">
              <div className="container fade-in-bottom">
                <h1>Your Full Service Studio</h1>
                <h3>Experts in <span className="hero-text-cycle">SEO</span></h3>
                <a className="company-cta">Learn More</a>
              </div>
              <div className="searchbar fade-out">
                <span>www.Chriswoodby.com</span>
                <img className="pulsate-bck" src="/images/magnifier.png"/>
              </div>
          </div>
      </div>
    )
}