import Navbar from '@/app/navbar';
export default function Page() {
  window.addEventListener("load", (event) => {
    let serviceList = ['SEO', 'Accessibility', 'Custom Development', 'Hosting'];
    const cycleList = function() {
      serviceList.forEach((item) => {
        console.log(item);
        document.querySelector('.hero-text-cycle').innerHTML = 'hero text';
        
      })
      
    }
    setInterval(() => {
      cycleList();
    }, 2);
  });

    return (
      <div>
          <div className="services-hero">
              <div className="container fade-in-bottom">
                <h1>Your Full Service Studio</h1>
                <h3>Experts in <span className="hero-text-cycle">SEO</span></h3>
              </div>
              <div className="searchbar fade-out">
                <span>www.Chriswoodby.com</span>
                <img className="pulsate-bck" src="/images/magnifier.png"/>
              </div>
          </div>
      </div>
    )
}