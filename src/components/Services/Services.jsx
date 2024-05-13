import React, { useState } from "react";
import globalStyles from "../../global.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import VideoSection from "../VideoSection/VideoSection";
import { contactImageSources, videoLink } from "../globalImageSources";

const Services = () => {
  return (
    <>
      <div className={globalStyles["outer-container"]}>
        {/* video container */}
        {/* home same video */}
        <div
          className={`${globalStyles["padding-group-extend"]} ${globalStyles["video-80"]}`}
        >
          <VideoSection videoLink={videoLink[0].image} />
        </div>

        <div className={globalStyles["padding-group-middle-grayBackground"]}>
          <div className={globalStyles["title-description-image-container"]}>
          <p className={globalStyles["first-line"]}>
                Providing Customized Solutions
              </p>
            <div className={globalStyles["title-description"]}>
              
              <p className={globalStyles["first-line"]}>
                Providing Customized Solutions
              </p>

              <div className={globalStyles["description-one-small"]}>
                <p>
                  OneRX represents a collection of highly qualified designers,
                  architects, project managers and engineers. We are specialist
                  in retail and brand development and work internationally.
                </p>
                <p>
                  We have offices in (HQ) Dubai, Seoul, Istanbul allowing us to
                  respond quickly to our client’s regional needs. Our teams can
                  develop projects from concept through project management and
                  replicate it anywhere.
                </p>
                <p>
                  OneRX culture is to provide customized solutions with high
                  quality services. Our goal is to ensure our clients succeed
                  and that we become an extension of their business.
                </p>
              </div>
            </div>
            <div className={globalStyles["image"]}>
              <img src={aboutImageSources[2].image} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
