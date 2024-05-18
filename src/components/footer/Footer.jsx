import React from "react";
import "./Footer.css";
import logo from "../../assests/logo/logo.png";
import { FaHome, FaMailBulk, FaPhone } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer_footerWrapper">
          <div className="footer_footerWrapper_cols">
            <div className="footer_footerWrapper_cols_logo">
              <img src={logo} alt="" />
            </div>
            <div className="footer_footerWrapper_cols_info">
              <p>
                Enter the world of Rosemary Radiance, where opulence intertwines
                with serenity. Our unwavering commitment to exceptional service
                guarantees a memorable retreat for every visitor.
              </p>
            </div>
          </div>

          <div className="footer_footerWrapper_cols small_screen">
            <div className="footer_footerWrapper_cols_head">
              <p>Quick Links</p>
            </div>
            <div className="footer_footerWrapper_cols_items">
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Attraction</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer_footerWrapper_cols">
            <div className="footer_footerWrapper_cols_head">
              <p>Contact Information</p>
            </div>
            <div className="footer_footerWrapper_cols_items">
              <div className="footer_footerWrapper_cols_items_itemBox">
                <div className="footer_footerWrapper_cols_items_itemBox_icon">
                  <FaHome
                    size={20}
                    style={{ color: "#fff", marginRight: "2rem" }}
                  />
                </div>
                <div className="footer_footerWrapper_cols_items_itemBox_info">
                  <p>6, dehradun </p>
                  <p>Uttarakhand 263136</p>
                </div>
              </div>

              <div className="footer_footerWrapper_cols_items_itemBox">
                <div className="footer_footerWrapper_cols_items_itemBox_icon">
                  <FaPhone
                    size={20}
                    style={{ color: "#fff", marginRight: "2rem" }}
                  />
                </div>
                <div className="footer_footerWrapper_cols_items_itemBox_info">
                  <p>9090909090</p>
                </div>
              </div>
              <div className="footer_footerWrapper_cols_items_itemBox">
                <div className="footer_footerWrapper_cols_items_itemBox_icon">
                  <FaMailBulk
                    size={20}
                    style={{ color: "#fff", marginRight: "2rem" }}
                  />
                </div>
                <div className="footer_footerWrapper_cols_items_itemBox_info">
                  rosemary@email.com
                </div>
              </div>
            </div>
          </div>
          <div className="footer_footerWrapper_cols">
            <iframe
              title="hotel-location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6955.103593896094!2d79.53384339809415!3d29.354128472945067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a09826275af4ab%3A0x7f269da6f790c97b!2sThe%20Rosemary!5e0!3m2!1sen!2sin!4v1710051434760!5m2!1sen!2sin"
              width="300"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="footer_copyRight">
          <h4>
            All Rights Reserved &#169;
            2023
          </h4>
        </div>
      </div>
    </>
  );
}

export default Footer;
