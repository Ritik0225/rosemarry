import React from "react";
import "./ContactUs.css";
import { FaHome, FaMailBulk, FaPhone } from "react-icons/fa";
import bedroom from "../../assests/bedroom.jpg"
const ContactUs = () => {
  return (
    <>
      <section className="contact">
        <div className="contact_hero">
          <h1>Contact Us</h1>
        </div>

        <div className="contact_main">
          <h1>Welcome To The Rosemary Let's Connect</h1>
          <div className="contact_main_container">
            <div className="contact_main_container_imgBox">
              <img src={bedroom} alt="bedroom" />
            </div>
            <div className="contact_main_container_infoBox">
              <div className="contact_main_container_infoBox_card">
                <div className="contact_main_container_infoBox_card_icon">
                  <FaHome
                    size={40}
                    style={{ color: "#05281c", marginRight: "2rem" }}
                  />
                </div>
                <div className="contact_main_container_infoBox_card_info">
                  <p>6,June Estate Rd,Bhimtal </p>
                  <p>Uttarakhand 263136</p>
                </div>
              </div>
              <div className="contact_main_container_infoBox_card">
                <div className="contact_main_container_infoBox_card_icon">
                  <FaPhone
                    size={40}
                    style={{ color: "#05281c", marginRight: "2rem" }}
                  />
                </div>
                <div className="contact_main_container_infoBox_card_info">
                  <p>9090909090</p>
                </div>
              </div>
              <div className="contact_main_container_infoBox_card">
                <div className="contact_main_container_infoBox_card_icon">
                  <FaMailBulk
                    size={40}
                    style={{ color: "#05281c", marginRight: "2rem" }}
                  />
                </div>
                <div className="contact_main_container_infoBox_card_info">
                  rosemary@email.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
