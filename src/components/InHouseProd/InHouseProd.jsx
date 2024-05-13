import React, { useState } from "react";
import globalStyles from "../../global.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import VideoSection from "../VideoSection/VideoSection";
import { contactImageSources, videoLink } from "../globalImageSources";
import inHouseProdImages from "./InHouseProdImagesSources";

const InHouseProdImages = () => {
  return (
    <>
      <div className={globalStyles["outer-container"]}>
        <div className={globalStyles["padding-container"]}>
          {/* image container */}
          {/* poster-title */}
            <div className={globalStyles["poster-title"]}>
              <div className={`${globalStyles["poster-image"]}`}>
                <img src={inHouseProdImages[0].image} alt="" />
              </div>
              <div className={globalStyles["poster-description"]}>
                <div className={globalStyles["first-line"]}>
                  In-House <br /> Production
                </div>
                <div className={globalStyles["large-description"]}>
                  <p>
                    OneRX is a group of designers, artists, master fabricators
                    and builders. We physically make and participate in
                    production directly for our projects within our in-house
                    facilities.
                  </p>
                  <p>
                    Each stage of the process is underpinned by a full range of
                    services we offer in-house, performed by a team of experts
                    passionate about shaping the future of retail.
                  </p>
                </div>
              </div>
            </div>

            
          </div>
        </div>
    </>
  );
};

export default InHouseProdImages;
