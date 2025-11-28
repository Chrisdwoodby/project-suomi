// import Image from "next/image";
"use client"; 
import Navbar from '@/app/navbar';
import { useState, useEffect } from 'react';
import React from 'react';
import Image from 'next/image';
// import screens from '../../Media/screens.png';
import { ElfsightWidget } from 'next-elfsight-widget';

export default function Home() {
  useEffect(() => {
    window.addEventListener('scroll', function() {
      const element = document.querySelector('.services-lines-container') as HTMLElement | null;
      if (element) {
          const position = element.getBoundingClientRect();
        // checking whether fully visible
        if (position.top >= 0 && position.bottom <= window.innerHeight) {
              element.classList.add("services-in-view");
        }
        // checking for partial visibility (logic can be added here if needed)
        if (position.top < window.innerHeight && position.bottom >= 0) {
              // Partial visibility code can go here
        }
      }
    });
  });
  
  const [description, setDescription] = useState<string>('Your website is often the first interaction potential customers have with your business, making web design critical to creating a strong first impression. A well-designed website reflects professionalism, builds trust, and engages visitors, setting the foundation for lasting customer relationships and business growth.');
  const [serviceTitle, setServiceTitle] = useState<string>('To help your business make the right first impression');

  // Function to handle service switching
  const serviceSwitcher = (selected: string) => {
    console.log(selected);

    // Use setState to update the description instead of manually changing the DOM
    if (selected === 'Web Design') {
      setDescription('Your website is often the first interaction potential customers have with your business, making web design critical to creating a strong first impression. A well-designed website reflects professionalism, builds trust, and engages visitors, setting the foundation for lasting customer relationships and business growth.');
      setServiceTitle('To help your business make the right first impression');
    } else if (selected === 'Graphic Design') {
      setDescription('Graphic design paragraph here');
      setServiceTitle('To help your business stand out');
    } else if (selected === 'SEO') {
      setDescription('SEO paragraph here');
      setServiceTitle('To help your business grow');
    } else if (selected === 'Digital Marketing') {
      setDescription('Digital marketing paragraph here');
      setServiceTitle('To help your business make the best decisions');
    } else if (selected === 'Landing Pages') {
      setDescription('Landing pages paragraph here');
      setServiceTitle('To help your business scale');
    }
  };

  return (
<div className="main" role="main">
        <div className="homepage">  
          <div className="home-banner">
            <div className="container">
              <div className="row banner-content-row">
                  <div className="col-md-6 home-banner-content" >
                      <h1>Web Design that makes<br></br> a <em>lasting impression</em></h1>
                      <article className="home-banner-subheader">Discover a new and faster way forward for you online needs</article>
                      <a className="company-cta">Get Started</a>
                  </div>
                  <div className="col-md-6" >
                  <img className="home-banner-image" src='/images/screens.png' alt="A description of the image"/>
                  </div>
              </div>
            </div>
            <div className="home-banner-lines-container">
              <span className="home-banner-lines line-1 slide-in-right-line-1"></span>
              <span className="home-banner-lines line-2 slide-in-right-line-2"></span>
              <span className="home-banner-lines line-3 slide-in-right-line-1"></span>
              <span className="home-banner-lines line-4 slide-in-right-line-1"></span>
              <span className="home-banner-lines line-5 slide-in-right-line-2"></span>
            </div>
          </div>
          <div className="web-section partners-container">
              <div className="container partners-logo-container">
                <h3>Trusted Partner of</h3>
                <div>
                    {/* <img src={gather}/>
                    <img src={collective}/> */}
                </div>
                <a className="company-cta"></a>
              </div>
          </div>
          <div className="web-section services">
            <div className="services-container container">
              <div className="row">
                <div className="col-md-4 services-column">
                  <h3 className="service-header">Website Services</h3>
                    <div className="mobile-service-wrap"><h4><a onClick={(e: React.MouseEvent<HTMLAnchorElement>) => serviceSwitcher((e.target as HTMLAnchorElement).innerHTML)}>Web Design</a></h4></div>
                    <div className="mobile-service-wrap"><h4><a onClick={(e: React.MouseEvent<HTMLAnchorElement>) => serviceSwitcher((e.target as HTMLAnchorElement).innerHTML)}>Graphic Design</a></h4></div>
                    <div className="mobile-service-wrap"><h4><a onClick={(e: React.MouseEvent<HTMLAnchorElement>) => serviceSwitcher((e.target as HTMLAnchorElement).innerHTML)}>SEO</a></h4></div>
                    <div className="mobile-service-wrap"><h4><a onClick={(e: React.MouseEvent<HTMLAnchorElement>) => serviceSwitcher((e.target as HTMLAnchorElement).innerHTML)}>Digital Marketing</a></h4></div>
                    <div className="mobile-service-wrap"><h4><a onClick={(e: React.MouseEvent<HTMLAnchorElement>) => serviceSwitcher((e.target as HTMLAnchorElement).innerHTML)}>Landing Pages</a></h4></div>
                </div>
                <div className="col-md-8 services-details">
                  <div className="web-design-details">
                    <span className="serivces-title">{serviceTitle}</span>
                    <article className="services-description">
                     {description}
                    </article>
                  </div>
                </div>
              </div>
            </div>
            <div className="services-lines-container">
              <span className="services-banner-lines line-1 slide-in-left-line-1"></span>
              <span className="services-banner-lines line-2 slide-in-left-line-2"></span>
              <span className="services-banner-lines line-3 slide-in-left-line-1"></span>
              <span className="services-banner-lines line-4 slide-in-left-line-1"></span>
              <span className="services-banner-lines line-5 slide-in-left-line-2"></span>
            </div>
          </div>
          <div className="web-section about-me-home">
            <div className="container">
              <div className="row">
                  <div className="about-container-home col-md-6" >
                
                  </div>
                  <div className="col-md-6">
                    <div className="about-content">
                      <h3>About Me</h3>
                      <article>
                      Born and raised in Austin, Texas and beginning my career at SaaS oriented startups. I was quick to find my calling in helping companies grow into their ideal visions for themselves through innovative design, a thorough and comprehensive understanding of their clients, and proven digital marketing strategies. All while staying true to their brand identity. 
                      </article>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          <div className="web-section cta-section">
            <div className="container">

            </div>
          </div>
          <div className="web-section contact-form">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-text-border">
                    <h3>Lets Build Something Great</h3>
                    <span>Form Subheader</span>
                    <article> here is some filler text that will be replaced later. here is some filler text that will be replaced later.</article>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-border">
                    {/* <ElfsightWidget widgetID="0a9cbdda-d65e-41d6-a4c4-0041247b8be2" /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
</div>
  
  )
}
