"use client"; 
import Navbar from '@/app/navbar';
import { useState, useEffect } from 'react';
export default function Page() {
    useEffect(() => {
        window.addEventListener('scroll', function() {
          const pillers = document.querySelector('.about-page-hero') as HTMLElement | null;
          const element = document.querySelector('.acomplishments') as HTMLElement | null;
          if (element) {
              const position = element.getBoundingClientRect()
            // checking for partial visibility (logic can be added here if needed)
            if (position.top >= 0 && position.bottom <= window.innerHeight) {
                  // Partial visibility code can go here
                  pillers.classList.add("acomplishments-in-view");
                  pillers.classList.remove("acomplishments-not-in-view");
            }
          }
          if (pillers) {
            const position = pillers.getBoundingClientRect()
          // checking whether fully visible
          if (position.top >= 0 && position.bottom <= window.innerHeight) {
                pillers.classList.add("acomplishments-not-in-view");
                pillers.classList.remove("acomplishments-in-view");
          }
        }
        });
      });
    return (
        <div>
            <div className="about-page-hero">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h1>About me</h1>
                            <span>Developer | Designer</span>

                            <div className="piller-group">
                                <div className="piller-image"></div>
                                <div className="piller-image"></div>
                                <div className="piller-image"></div>
                            </div>

                        </div>
                        <div className="col-md-6"></div>
                    </div>
                </div>
            </div>
            <div className="acomplishments" role="complementary">

            </div>
        </div>
    )
}