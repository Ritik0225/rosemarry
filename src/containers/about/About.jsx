import React from "react";
import "./about.css";
import restaurant from "../../assests/restaurant.jpg"

const About = () => {
  return (
    <>
      <section className="about">
        <div className="about_container">
          <div className="about_container_imgBox">
            <img src={restaurant} alt="restaurant photo" />
          </div>
          <div className="about_container_info">
            <h4>ABOUT US </h4>
            <h2>
              Welcome to Hotel Rosemary, where every stay is a fragrant blend of
              luxury and warmth, creating unforgettable memories one petal at a
              time.
            </h2>
            <p>
              Nestled in the picturesque town of Bhimtal, Hotel Rosemary invites
              you to experience tranquility amidst nature's embrace. Overlooking
              the serene Bhimtal Lake, our hotel offers a perfect blend of
              modern comfort and rustic charm. Immerse yourself in the
              breathtaking beauty of the surroundings while indulging in our
              warm hospitality. Whether you seek a peaceful retreat or exciting
              adventures, Hotel Rosemary in Bhimtal is your gateway to a
              memorable escape in the heart of the Himalayas.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
