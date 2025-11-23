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
    
    if (titleLinesContainer) {
      titleLines.forEach((item) => {
        item.style.height = `${getRandomNumber(50, 70)}px`;
        item.style.marginBottom = `${getRandomNumber(5, 20)}px`;
        item.style.marginTop = `${getRandomNumber(5, 20)}px`;
      });
    }
    
    if (titleLinesContainer) {
      titleLinesContainer.forEach((container) => {
        let animating = false;
    
        container.addEventListener("mouseenter", () => {
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
        });
        container.addEventListener("mouseleave", () => {
          animating = false;
    
          const lines = container.querySelectorAll<HTMLElement>('.service-page-title-bg-line');
    
          // Smooth reset
          lines.forEach((line) => {
            line.style.transition = "margin 0.4s ease-out";
            line.style.marginTop = "30px";
            line.style.marginBottom = "30px";
          });
    
          // Remove transition so hover animation is smooth
          setTimeout(() => {
            lines.forEach((line) => {
              line.style.transition = "";
            });
          }, 400);
        });
      });
    }
    
    
    const serviceDropdowns = document.querySelectorAll('.service-dropdown') as NodeListOf<HTMLElement>;
    if (serviceDropdowns) {
      serviceDropdowns.forEach((dropdown) => {
        dropdown.addEventListener('click', () => {
          if (dropdown.classList.contains('expanded')) {
            dropdown.classList.remove('expanded');
          } else {
            dropdown.classList.add('expanded');
          }
        })
      })
    }

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
      <div className="main" role="main">
          <div className="services-hero">
              <div className="container fade-in-bottom">
                <h1>Your Full Service Studio</h1>
                <h3>Experts in <span className="hero-text-cycle">SEO</span></h3>
                <a className="company-cta">Learn More</a>
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
              <h3>SEO</h3>
              <div className="row service-dropdown">
                <div className="service-row-top">
                  <h4>SEO Audits</h4>
                </div>
                <div className="service-row-bottom">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem soluta quos officia accusamus nam possimus totam? Dicta non saepe consequatur asperiores voluptas delectus vitae, molestias omnis quibusdam quod id rerum?</p>
                </div>
              </div>
              <div className="row service-dropdown">
                <div className="service-row-top">
                  <h4>Site Optimizations</h4>
                </div>
                <div className="service-row-bottom">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem soluta quos officia accusamus nam possimus totam? Dicta non saepe consequatur asperiores voluptas delectus vitae, molestias omnis quibusdam quod id rerum?</p>
                </div>
              </div>
            </div>
            <div id="accessibility" className="container">
              <h3>Accessibility</h3>
              <div className="row service-dropdown">
                <div className="service-row-top">
                  <h4>Audits</h4>
                </div>
                <div className="service-row-bottom">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem soluta quos officia accusamus nam possimus totam? Dicta non saepe consequatur asperiores voluptas delectus vitae, molestias omnis quibusdam quod id rerum?</p>
                </div>
              </div>
              <div className="row service-dropdown">
                <div className="service-row-top">
                  <h4>Item # 2</h4>
                </div>
                <div className="service-row-bottom">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem soluta quos officia accusamus nam possimus totam? Dicta non saepe consequatur asperiores voluptas delectus vitae, molestias omnis quibusdam quod id rerum?</p>
                </div>
              </div>
            </div>
            <div id="development" className="container">
              <h3>Development</h3>
              <div className="row service-dropdown">
                <div className="service-row-top">
                  <h4>Audits</h4>
                </div>
                <div className="service-row-bottom">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem soluta quos officia accusamus nam possimus totam? Dicta non saepe consequatur asperiores voluptas delectus vitae, molestias omnis quibusdam quod id rerum?</p>
                </div>
              </div>
              <div className="row service-dropdown">
                <div className="service-row-top">
                  <h4>Item # 2</h4>
                </div>
                <div className="service-row-bottom">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem soluta quos officia accusamus nam possimus totam? Dicta non saepe consequatur asperiores voluptas delectus vitae, molestias omnis quibusdam quod id rerum?</p>
                </div>
              </div>
            </div>
            <div id="design" className="container">
              <h3>Design</h3>
              <div className="row service-dropdown">
                <div className="service-row-top">
                  <h4>Audits</h4>
                </div>
                <div className="service-row-bottom">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem soluta quos officia accusamus nam possimus totam? Dicta non saepe consequatur asperiores voluptas delectus vitae, molestias omnis quibusdam quod id rerum?</p>
                </div>
              </div>
              <div className="row service-dropdown">
                <div className="service-row-top">
                  <h4>Item # 2</h4>
                </div>
                <div className="service-row-bottom">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem soluta quos officia accusamus nam possimus totam? Dicta non saepe consequatur asperiores voluptas delectus vitae, molestias omnis quibusdam quod id rerum?</p>
                </div>
              </div>
            </div>
          </div>
      </div>
    )
}