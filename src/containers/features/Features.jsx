import React from "react";

import "./features.css";
import { FaUserDoctor } from "react-icons/fa6";
import { MdOutlineSecurity } from "react-icons/md";
import { FaWifi, FaParking } from "react-icons/fa";
import { IoMdRestaurant, IoIosBonfire } from "react-icons/io";

const Facilities = () => {
  return (
    <>
    <section className="features">
      <h1>Facilities</h1>
      <p>
        Take a step closer to nature by staying at The Rosemarry Hotel, Nainital
        with spacious rooms, a bonfire, and other required amenities.
      </p>

      <div className="features_cardContainer">
        <div className="features_cardContainer_card">
          <div className="features_cardContainer_card_icon">
            <FaWifi></FaWifi>
          </div>
          <div className="features_cardContainer_card_info">
            <h3>Free Wi-Fi</h3>
            <p>Stay connected with our high-speed Wi-Fi network.</p>
          </div>
        </div>

        <div className="features_cardContainer_card">
          <div className="features_cardContainer_card_icon">
            <FaUserDoctor></FaUserDoctor>
          </div>
          <div className="features_cardContainer_card_info">
            <h3>Doctor on Call</h3>
            <p>Doctor on call for any medical emergencies.</p>
          </div>
        </div>
        <div className="features_cardContainer_card">
          <div className="features_cardContainer_card_icon">
            <FaParking></FaParking>
          </div>
          <div className="features_cardContainer_card_info">
            <h3>Parking</h3>
            <p>Convenient parking available for all guests.</p>
          </div>
        </div>

        <div className="features_cardContainer_card">
          <div className="features_cardContainer_card_icon">
            <IoMdRestaurant></IoMdRestaurant>
          </div>
          <div className="features_cardContainer_card_info">
            <h3>Restaurant</h3>
            <p>Enjoy delicious meals at our onsite restaurant.</p>
          </div>
        </div>

        <div className="features_cardContainer_card">
          <div className="features_cardContainer_card_icon">
            <IoIosBonfire></IoIosBonfire>
          </div>
          <div className="features_cardContainer_card_info">
            <h3>Bonfire</h3>
            <p>Gather around the crackling flames and enjoy.</p>
          </div>
        </div>
        <div className="features_cardContainer_card">
          <div className="features_cardContainer_card_icon">
            <MdOutlineSecurity></MdOutlineSecurity>
          </div>
          <div className="features_cardContainer_card_info">
            <h3>24/7 Security</h3>
            <p>Rest assured with round-the-clock security surveillance.</p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Facilities;
