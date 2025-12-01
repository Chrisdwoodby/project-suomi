"use client"; 
import Navbar from '@/app/navbar';
import { useState, useEffect } from 'react';
export default function Page() {
    useEffect(() => {
        window.addEventListener('scroll', function() {
          const pageBody = document.querySelector('.about-me-page') as HTMLElement | null;
          const pillers = document.querySelector('.about-page-hero') as HTMLElement | null;
          const element = document.querySelector('.acomplishments') as HTMLElement | null;
          if (element) {
              const position = element.getBoundingClientRect()
            // checking for partial visibility (logic can be added here if needed)
            if (position.top >= 0 && position.bottom <= window.innerHeight) {
                  // Partial visibility code can go here
                  pillers.classList.add("acomplishments-in-view");
                  pillers.classList.remove("acomplishments-not-in-view");
                  pageBody.classList.add("animated");
            }
          }
          if (pillers) {
            const position = pillers.getBoundingClientRect()
          // checking whether fully visible
          if (position.top >= 0 && position.bottom <= window.innerHeight) {
                pillers.classList.add("acomplishments-not-in-view");
                pillers.classList.remove("acomplishments-in-view");
                pageBody.classList.remove("animated");
          }
        }
        });
      });
    return (
        <div className="about-me-page main">
            <div className="about-page-hero hero">
                <div className="container">
                    <div className="row">
                        <div className="">
                            <h1>About me</h1>
                            <span>Developer | Designer</span>

                            <div className="piller-group">
                                <div className="piller-wide"></div>
                                <div className="piller-2"></div>
                                <div className="piller-3"></div>
                            </div>

                        </div>
                        <div className="col-md-6"></div>
                    </div>
                </div>
            </div>
            <div className="acomplishments" role="complementary">
                <div className="container">
                    <h2 className="acomplishments-heading">Who i've helped</h2>
                </div>
            </div>
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <span>787 Collective</span>
                        </div>
                        <div className="col-md-6">
                            <span>Gather Austin</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}