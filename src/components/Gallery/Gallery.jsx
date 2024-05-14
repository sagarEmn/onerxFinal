import React, { useState } from "react";
import globalStyles from "../../global.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import VideoSection from "../VideoSection/VideoSection";
import { contactImageSources, videoLink } from "../globalImageSources";
import ContactUs from "../Home/ContactUs/ContactUs";

const Gallery = () => {
  return (
    <>
      <div className={globalStyles["outer-container"]}>
        <div className={globalStyles["padding-container"]}>
          {/* nav location */}
          <div className={globalStyles["padding-group-middle-grayBackground"]}>
            <div className={globalStyles["display-nav-location-center"]}>
              <div className={globalStyles["first-line"]}>GALLERY</div>
              <div className={globalStyles["px14-line"]}>
                HOME {">"} GALLERY
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
