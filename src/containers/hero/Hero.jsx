import React from "react";
import Typewriter from "typewriter-effect";
import './hero.css';
import arrow from '../../assests/images/down_arrow.png';
import homeBg from '../../assests/images/home_bg.jpg';

function Hero() {
 

  return (
    <div className="background" style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${homeBg})`
    }}>
      <div className="hero-text">
        <h2>
          WELCOME TO THE ROSEMARY
        </h2>
        <div className="hero-header">
          <h1>Discover the art of</h1>
        </div>
        
        <div className="subheader-typewriter-container">
         
          <div className="subheader-typewriter">
            <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .typeString("Vacationing")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Exploring")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Relaxing")
                        .pauseFor(1000)
                        .start();
                        
                }}
                options={{
                  loop: true,
                  delay: 100, 
                }}
            />
             </div>
             </div>
    
       
      </div>

      <div className="scrollBox">
        <h4>Scroll</h4>
        
        <div className="arrowBox" onClick={() => window.scrollTo({ top: 850, behavior: "smooth" })}>
          <img src={arrow} alt="" width="30px" />
       
        </div>
      </div>
    </div>
  );
}

export default Hero;
