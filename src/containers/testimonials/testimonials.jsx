import React from "react";
import "./testimonials.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    appendDots: (dots) => (
      <div style={{ bottom: "10px", textAlign: "center" }}>
        <ul style={{ margin: "0" }}>{dots}</ul>
      </div>
    )
  };

  return (
    <section className="testimonial">
      <h1>
        A Handful of Guests Have Submitted <br />Their Best Memories
      </h1>
      <div className="story-div">
        <div className="center-slider">
          <Slider {...settings}>
            <div className="slider-div">
              <div className="story-text">
                <h3>
                  Exceptional stay at The Rosemary! Impeccable service, stylish rooms, and a prime location made my visit truly memorable. Highly recommend
                </h3>
                <p>
                  - Ayush Kumar
                </p>
              </div>
            </div>

            <div className="slider-div">
              <div className="story-text">
                <h3>
                  "A delightful experience at The Rosemary. From the friendly staff to the well-appointed rooms, every detail exceeded expectations. Can't wait to return!"
                </h3>
                <p>
                  - Arun Mittal
                </p>
              </div>
            </div>

            <div className="slider-div">
              <div className="story-text">
                <h3>
                  " A delightful experience at The Rosemary. From the friendly staff to the well-appointed rooms, every detail exceeded expectations. Can't wait to return!"
                </h3>
                <p>
                  - Shivangi Srivastava
                </p>
              </div>
            </div>

            <div className="slider-div">
              <div className="story-text">
                <h3>
                  A hidden paradise! The Rosemary exceeded all expectations. Impeccable service, breathtaking views, and a tranquil ambiance. A must-visit destination
                </h3>
                <p>
                  - Ayushi Raypa
                </p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
