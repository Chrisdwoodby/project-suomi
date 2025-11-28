"use client"; 
import Navbar from '@/app/navbar';
import { useState, useEffect } from 'react';
export default function Page() {
  let serviceList = ['SEO', 'Accessibility', 'Development', 'Design'];
  let index = 0;
  useEffect(() => {
    function getRandomNumber(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }
  
    const titleLines = document.querySelectorAll('.service-page-title-bg-line') as NodeListOf<HTMLElement>;
    const titleLinesContainer = document.querySelectorAll('.service-page-title-container') as NodeListOf<HTMLElement>;
  
    titleLines.forEach((item) => {
      item.style.height = `${getRandomNumber(50, 70)}px`;
      item.style.marginBottom = `${getRandomNumber(5, 20)}px`;
      item.style.marginTop = `${getRandomNumber(5, 20)}px`;
    });
  
    // Store cleanup handlers
    const cleanupFns: Array<() => void> = [];
  
    titleLinesContainer.forEach((container) => {
      let animating = false;
  
      const mouseEnter = () => {
        const lines = container.querySelectorAll<HTMLElement>('.service-page-title-bg-line');
        animating = true;
  
        const animate = () => {
          if (!animating) return;
  
          const time = Date.now() / 300;
  
          lines.forEach((line, index) => {
            const amplitude = 25;
            const offset = Math.sin(time + index * 0.6) * amplitude;
  
            line.style.marginTop = `${30 + offset}px`;
            line.style.marginBottom = `${30 - offset}px`;
          });
  
          requestAnimationFrame(animate);
        };
  
        requestAnimationFrame(animate);
      };
  
      const mouseLeave = () => {
        animating = false;
  
        const lines = container.querySelectorAll<HTMLElement>('.service-page-title-bg-line');
        lines.forEach((line) => {
          line.style.transition = "margin 0.4s ease-out";
          line.style.marginTop = "30px";
          line.style.marginBottom = "30px";
        });
  
        setTimeout(() => {
          lines.forEach((line) => {
            line.style.transition = "";
          });
        }, 400);
      };
  
      container.addEventListener("mouseenter", mouseEnter);
      container.addEventListener("mouseleave", mouseLeave);
  
      cleanupFns.push(() => {
        container.removeEventListener("mouseenter", mouseEnter);
        container.removeEventListener("mouseleave", mouseLeave);
      });
    });
  
    const serviceDropdowns = document.querySelectorAll('.service-dropdown') as NodeListOf<HTMLElement>;
  
    serviceDropdowns.forEach((dropdown) => {
      const clickHandler = () => dropdown.classList.toggle('expanded');
      dropdown.addEventListener("click", clickHandler);
  
      cleanupFns.push(() => {
        dropdown.removeEventListener("click", clickHandler);
      });
    });
  
    const heroText = document.querySelector('.hero-text-cycle') as HTMLElement | null;
    if (heroText) {
      heroText.classList.add('text-fade');
      
      const changeText = () => {
        heroText.classList.add('text-hidden');
        setTimeout(() => {
          if (index === 3) index = 0;
          heroText.innerHTML = serviceList[index++];
          heroText.classList.remove('text-hidden');
        }, 600);
      };
  
      changeText();
      const interval = setInterval(changeText, 4000);
  
      cleanupFns.push(() => clearInterval(interval));
    }
  
    // Cleanup everything on unmount / page leave
    return () => {
      cleanupFns.forEach(fn => fn());
    };
  
  }, []);
  
    return (
      <div className="main" role="main">
          <div className="services-hero">
              <div className="container fade-in-bottom">
                <div className="row">
                <div className="col-md-6">
                  <h1>Your Full Service Studio</h1>
                  <h3>Experts in <span className="hero-text-cycle">SEO</span></h3>
                  <a className="company-cta">Learn More</a>
                </div>
                <div className="col-md-6 col-align-center gear-container">
                  <img className="service-hero-right-col-img" src="/images/monitor.png"/>
                  <img className="gear-1" src="/images/gear-1.png"/>
                  <img className="gear-2" src="/images/gear-2.png"/>
                </div>
                </div>
              </div>
              <div className="searchbar fade-out">
                <span>www.Chriswoodby.com</span>
                <img className="pulsate-bck" src="/images/magnifier.png" alt="search button icon"/>
              </div>
          </div>
          <div className="service-list">
            <div className="container">
              <div className="row">
                <div className="col-md-3 service-page-title-container container-border-right">
                  <a className="link-to-details" href="#seo">
                    <span className="service-page-title-bg-line"></span>
                    <span className="service-page-title-bg-line"></span>
                    <span className="service-page-title-bg-line"></span>
                    <span className="service-page-title-bg-line"></span>
                    <span className="service-page-title-bg-line"></span>
                    <span className="service-page-title-bg-line"></span>
                    <span className="service-page-title-bg-line"></span>
                    <div className="service-page-title">
                      <h4>SEO</h4>
                    </div>
                  </a>
                </div>
                <div className="col-md-3 service-page-title-container container-border-right">
                  <a className="link-to-details" href="#accessibility">
                    <span className="service-page-title-bg-line"></span>
                    <span className="service-page-title-bg-line"></span>
                    <span className="service-page-title-bg-line"></span>
                    <span className="service-page-title-bg-line"></span>
                    <span className="service-page-title-bg-line"></span>
                    <span className="service-page-title-bg-line"></span>
                    <span className="service-page-title-bg-line"></span>
                    <span className="service-page-title-bg-line"></span>
                    <span className="service-page-title-bg-line"></span>
                    <span className="service-page-title-bg-line"></span>
                    <span className="service-page-title-bg-line"></span>
                    <span className="service-page-title-bg-line"></span>
                    <span className="service-page-title-bg-line"></span>
                    <span className="service-page-title-bg-line"></span>
                    <span className="service-page-title-bg-line"></span>
                    <div className="service-page-title">
                      <h4>Accessibility</h4>
                    </div>
                  </a>
                </div>
                <div className="col-md-3 service-page-title-container container-border-right">
                  <a className="link-to-details" href="#development">
                    <span className="service-page-title-bg-line"></span>
                    <span className="service-page-title-bg-line"></span>
                    <span className="service-page-title-bg-line"></span>
                    <span className="service-page-title-bg-line"></span>
                    <span className="service-page-title-bg-line"></span>
                    <span className="service-page-title-bg-line"></span>
                    <span className="service-page-title-bg-line"></span>
                    <span className="service-page-title-bg-line"></span>
                    <span className="service-page-title-bg-line"></span>
                    <span className="service-page-title-bg-line"></span>
                    <span className="service-page-title-bg-line"></span>
                    <span className="service-page-title-bg-line"></span>
                    <span className="service-page-title-bg-line"></span>
                    <span className="service-page-title-bg-line"></span>
                    <span className="service-page-title-bg-line"></span>
                    <span className="service-page-title-bg-line"></span>
                    <span className="service-page-title-bg-line"></span>
                    <span className="service-page-title-bg-line"></span>
                    <div className="service-page-title">
                      <h4>Development</h4>
                    </div>
                  </a>
                </div>
                <div className="col-md-3 service-page-title-container">
                  <a className="link-to-details" href="#design">
                    <span className="service-page-title-bg-line"></span>
                    <span className="service-page-title-bg-line"></span>
                    <span className="service-page-title-bg-line"></span>
                    <span className="service-page-title-bg-line"></span>
                    <span className="service-page-title-bg-line"></span>
                    <span className="service-page-title-bg-line"></span>
                    <span className="service-page-title-bg-line"></span>
                    <span className="service-page-title-bg-line"></span>
                    <span className="service-page-title-bg-line"></span>
                    <span className="service-page-title-bg-line"></span>
                    <div className="service-page-title">
                      <h4>Design</h4>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="service-details">
            <div id="seo" className="container">
              <div className="row">
                <div className="col-md-3">
                  <h3>SEO</h3>
                </div>
                <div className="col-md-9">
                  <div className="service-dropdown">
                    <div className="service-row-top">
                      <h4>SEO Audits</h4>
                    </div>
                    <div className="service-row-bottom">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem soluta quos officia accusamus nam possimus totam? Dicta non saepe consequatur asperiores voluptas delectus vitae, molestias omnis quibusdam quod id rerum?</p>
                    </div>
                  </div>
                  <div className="service-dropdown">
                    <div className="service-row-top">
                      <h4>Site Optimizations</h4>
                    </div>
                    <div className="service-row-bottom">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem soluta quos officia accusamus nam possimus totam? Dicta non saepe consequatur asperiores voluptas delectus vitae, molestias omnis quibusdam quod id rerum?</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="seo" className="container">
              <div className="row">
                <div className="col-md-3">
                  <h3>Accessibility</h3>
                </div>
                <div className="col-md-9">
                  <div className="service-dropdown">
                    <div className="service-row-top">
                      <h4>SEO Audits</h4>
                    </div>
                    <div className="service-row-bottom">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem soluta quos officia accusamus nam possimus totam? Dicta non saepe consequatur asperiores voluptas delectus vitae, molestias omnis quibusdam quod id rerum?</p>
                    </div>
                  </div>
                  <div className="service-dropdown">
                    <div className="service-row-top">
                      <h4>Site Optimizations</h4>
                    </div>
                    <div className="service-row-bottom">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem soluta quos officia accusamus nam possimus totam? Dicta non saepe consequatur asperiores voluptas delectus vitae, molestias omnis quibusdam quod id rerum?</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="seo" className="container">
              <div className="row">
                <div className="col-md-3">
                  <h3>Development</h3>
                </div>
                <div className="col-md-9">
                  <div className="service-dropdown">
                    <div className="service-row-top">
                      <h4>SEO Audits</h4>
                    </div>
                    <div className="service-row-bottom">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem soluta quos officia accusamus nam possimus totam? Dicta non saepe consequatur asperiores voluptas delectus vitae, molestias omnis quibusdam quod id rerum?</p>
                    </div>
                  </div>
                  <div className="service-dropdown">
                    <div className="service-row-top">
                      <h4>Site Optimizations</h4>
                    </div>
                    <div className="service-row-bottom">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem soluta quos officia accusamus nam possimus totam? Dicta non saepe consequatur asperiores voluptas delectus vitae, molestias omnis quibusdam quod id rerum?</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="seo" className="container">
              <div className="row">
                <div className="col-md-3">
                  <h3>design</h3>
                </div>
                <div className="col-md-9">
                  <div className="service-dropdown">
                    <div className="service-row-top">
                      <h4>SEO Audits</h4>
                    </div>
                    <div className="service-row-bottom">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem soluta quos officia accusamus nam possimus totam? Dicta non saepe consequatur asperiores voluptas delectus vitae, molestias omnis quibusdam quod id rerum?</p>
                    </div>
                  </div>
                  <div className="service-dropdown">
                    <div className="service-row-top">
                      <h4>Site Optimizations</h4>
                    </div>
                    <div className="service-row-bottom">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem soluta quos officia accusamus nam possimus totam? Dicta non saepe consequatur asperiores voluptas delectus vitae, molestias omnis quibusdam quod id rerum?</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    )
}