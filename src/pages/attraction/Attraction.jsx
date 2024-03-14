import React from "react";
import BinsarWildlifeSanctuary from "../../assests/BinsarWildlifeSanctuary.jpeg";
import SkyBirdAdventures from "../../assests/SkyBirdAdventures.jpeg";
import BhimeshwarHinduTemple from "../../assests/BhimeshwarHinduTemple.jpg";
import snow_view_point from "../../assests/Snow_View_Point.jpg";
import SattalWaterfall from "../../assests/SattalWaterfall.jpeg";
import TagoreTop from "../../assests/TagoreTop.jpg";
import NainaPeak from "../../assests/NainaPeak.jpg";
import "./Attraction.css";

const Attraction = () => {
  return (
    <>
      <section className="attraction">
        <div className="attraction_hero">
          <h1>Attraction</h1>
        </div>

        <div className="attraction_container">
          <h1>
            Unveiling Nearby Delights - Explore the Charm and Excitement Just
            Steps Away!
          </h1>
          <div className="attraction_container_cardContainer">
            {/* <Fade left duration={1500}> */}
            <div class="attraction_container_cardContainer_card">
              <div className="attraction_container_cardContainer_card_imgBox">
                <img src={BinsarWildlifeSanctuary} alt="Human Rights Logo" />
              </div>
              <div className="attraction_container_cardContainer_card_info">
                <h3>
                  Binsar Wildlife Sanctuary
                  <span className="text-distance"> (87.0km)</span>
                </h3>

                <p>
                  Binsar lies on top of a mountain in the lower Himalayas, about
                  30 km north of Almora town in Uttarakhand. The sanctuary
                  spreads over 45.59 km2. Its altitude varies from 900 to 2500
                  metres with an average height of 2412 metres. The temperature
                  of this area is about 20 °C.
                </p>
              </div>
            </div>
            {/* </Fade> */}

            <div class="attraction_container_cardContainer_card">
              <div className="attraction_container_cardContainer_card_imgBox">
                <img src={SkyBirdAdventures} alt="Human Rights Logo" />
              </div>
              <div className="attraction_container_cardContainer_card_info">
                <h3>
                  Sky Bird Adventures{" "}
                  <span className="text-distance"> (5.9km)</span>
                </h3>
                <p>
                  Sky Bird Adventures is a paragliding club in Bhimtal,
                  Nainital, India that was established in 2012. They offer
                  tandem paragliding flights for thrill seekers and adventure
                  enthusiasts. They also offer other outdoor activities.
                </p>
              </div>
            </div>

            <div class="attraction_container_cardContainer_card">
              <div className="attraction_container_cardContainer_card_imgBox">
                <img src={snow_view_point} alt="Human Rights Logo" />
              </div>
              <div className="attraction_container_cardContainer_card_info">
                <h3>
                  Snow View Point <span className="text-distance"> (17km)</span>
                </h3>
                <p>
                  Snow View Point is a tourist attraction in Nainital,
                  Uttarakhand, India. It is located at an altitude of 2,270
                  meters, 2.5 kilometers from the town. The point is accessible
                  by ropeway or motorable road.
                </p>
              </div>
            </div>

            <div class="attraction_container_cardContainer_card">
              <div className="attraction_container_cardContainer_card_imgBox">
                <img src={BhimeshwarHinduTemple} alt="Human Rights Logo" />
              </div>
              <div className="attraction_container_cardContainer_card_info">
                <h3>
                  Bhimeshwar Hindu Temple{" "}
                  <span className="text-distance"> (3.9km)</span>
                </h3>
                <p>
                  Bhimeshwar Mahadev temple is situated in a beautiful place
                  with heavenly view. This temple is situated in Bhimtal in
                  Nainital district, Uttarakhand. It is an old Shiv temple
                  located in the banks of Bhimtal lake. This temple got its name
                  after the powerful Mahabharata character Bhim
                </p>
                <footer>(3.9 Km)</footer>
              </div>
            </div>

            <div class="attraction_container_cardContainer_card">
              <div className="attraction_container_cardContainer_card_imgBox">
                <img src={SattalWaterfall} alt="Human Rights Logo" />
              </div>
              <div className="attraction_container_cardContainer_card_info">
                <h3>
                  Sattal Water Fall{" "}
                  <span className="text-distance"> (13.0km)</span>
                </h3>
                <p>
                  Sattal Waterfall is a hidden waterfall near Sattal, a series
                  of seven freshwater lakes in Uttarakhand, India. The lakes are
                  at an altitude of 1,370 meters above sea level, and are
                  located in the Mehragaon valley. The lakes are surrounded by
                  oak and pine trees, and are a paradise for migratory birds.{" "}
                </p>
              </div>
            </div>

            <div class="attraction_container_cardContainer_card">
              <div className="attraction_container_cardContainer_card_imgBox">
                <img src={TagoreTop} alt="Human Rights Logo" />
              </div>
              <div className="attraction_container_cardContainer_card_info">
                <h3>
                  Tagore Top <span className="text-distance"> (24.5km)</span>
                </h3>
                <p>
                  The 'Tagore Top' hill is located in Ramgarh Nainital district
                  at a place called Mahesh Khan on Bhowali-Ramgarh road. To
                  reach the Tagore Top where Gurudev resided in 1903 one has to
                  trek around 4-5kms. At around 5000ft above the sea level, the
                  cottage is now in ruins waiting for its revival.
                </p>
              </div>
            </div>

            <div class="attraction_container_cardContainer_card">
              <div className="attraction_container_cardContainer_card_imgBox">
                <img src={NainaPeak} alt="Human Rights Logo" />
              </div>
              <div className="attraction_container_cardContainer_card_info">
                <h3>
                  Naina Peak <span className="text-distance"> (21.4km)</span>
                </h3>
                <p>
                  Naina Peak is the highest peak in Nainital, India, standing at
                  an elevation of 2,615 meters (8,579 feet) above sea level.
                  It's also known as Cheena Peak or China Peak. The Naina peak
                  trek is a paradise for trekkers as it throws at you a mix of
                  the trials which is uphill, steep and beautiful.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Attraction;
