import React from "react";
// import { BiSolidArea } from 'react-icons/bi';
// import { IoBed, IoPerson } from 'react-icons/io5';
import room1 from "../../assests/room1.jpg";
import room2 from "../../assests/room2.jpg";
import room3 from "../../assests/room3.jpg";
import "./rooms.css";

const Rooms = () => {
  return (
    <>
      <section className="rooms">
        <h1>Our Rooms</h1>

        <div className="rooms_cardContainer">
          <div className="rooms_cardContainer_card">
            <div className="rooms_cardContainer_card_imgBox">
              <img src={room1} alt="room photo" />
            </div>
            <div className="rooms_cardContainer_card_info">
              <h2>Deluxe Room</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </div>
          </div>

          <div className="rooms_cardContainer_card">
            <div className="rooms_cardContainer_card_imgBox">
              <img src={room2} alt="room photo" />
            </div>
            <div className="rooms_cardContainer_card_info">
              <h2>Super Deluxe Room</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </div>
          </div>

          <div className="rooms_cardContainer_card">
            <div className="rooms_cardContainer_card_imgBox">
            <img src={room3} alt="room photo" />
            </div>
            <div className="rooms_cardContainer_card_info">
            <h2>Triple Room</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Rooms;
