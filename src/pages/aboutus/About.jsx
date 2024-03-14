import React from "react";
import "./About.css";
import { About, Testimonial } from "../../containers/index";
const AboutUs = () => {
  return (
    <>
      <section className="aboutus">
        <div className="aboutus_hero">
          <h1>ABOUT US</h1>
        </div>
        <About />
        <div className="aboutus_coreValues">
          <div className="core-values-container">
            <h1>Our Core Values</h1>
            <div className="core-value">
              
              <p><span className="text-bold">Hospitality: </span>
                Providing exceptional service and creating a welcoming
                atmosphere for guests is often considered the cornerstone of a
                hotel's core values.
              </p>
            </div>
            <div className="core-value">
              
              <p><span className="text-bold">Customer Satisfaction: </span>
                Ensuring that guests have a memorable and enjoyable experience
                is crucial. This includes meeting their needs promptly,
                addressing any concerns or issues, and striving to exceed their
                expectations.
              </p>
            </div>
            <div className="core-value">
              
              <p><span className="text-bold">Quality: </span>
                Maintaining high standards of cleanliness, comfort, and
                amenities is essential for building trust and loyalty among
                guests.
              </p>
            </div>
            <div className="core-value">
              
              <p><span className="text-bold">Integrity: </span>
                Acting with honesty, transparency, and ethical conduct in all
                business dealings, including pricing, advertising, and guest
                interactions, is vital for establishing credibility and trust.
              </p>
            </div>
            <div className="core-value">
              
              <p><span className="text-bold">Continuous Improvement: </span>
                Embracing innovation, soliciting feedback from guests and
                employees, and continually seeking ways to enhance the guest
                experience and operational efficiency are essential for staying
                competitive and adapting to changing trends.
              </p>
            </div>
          </div>
        </div>
        <Testimonial/>
      </section>
    </>
  );
};

export default AboutUs;
