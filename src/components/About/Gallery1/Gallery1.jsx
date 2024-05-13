import React from "react";
import globalStyles from "../../../global.module.css";
import local from "./Gallery1.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import imageSources from "../AboutImage.js";
import VideoSection from "../VideoSection/VideoSection.jsx";

const Gallery1 = () => {
  return (
    <>
      <div
        className={`${globalStyles["outer-container"]} ${local["outer-container"]}`}
      >
        <div
          className={`${globalStyles["padding-container"]} ${local["padding-container"]}`}
        >
          {/* image container */}
          <div
            className={`${globalStyles["padding-group-first"]} ${globalStyles["padding-group-extend"]} `}
          >
            <div className={globalStyles["image-container"]}>
              <img src={imageSources[0].image} alt="" />
            </div>
          </div>

          {/* title texts content */}
          <div className={globalStyles["padding-group-middle"]}>
            <div className={globalStyles["first-line"]}>
              We are global interior and branding experts specialising in
              customer-centric experience design.
            </div>

            {/* descriptions text content */}
            <div className={globalStyles["description-one-small"]}>
              <p>
                One RX has a cross-border retail network of professionals who
                have worked together to help retail brands meet the needs of
                their business in the Europe, Asia and Middle East. Various
                retail environment experience in diverse country ; proven
                experience in GCC, Turkey, Africa, Russia and Korea.
              </p>
              <p>
                Collaboration and information sharing is the key to successful
                global retail client service. Our professionals engage in
                consistent dialogue across time zones and geography to stay
                abreast of the changing pace of the retail industry.
              </p>
            </div>
          </div>

          {/* video container */}
          <div className={globalStyles["padding-group-extend"]}>
            <VideoSection videoLink={imageSources[1].image} />
          </div>

          {/* title-description-image-container */}
          {/* providing customized solutions */}
          <div className={globalStyles["padding-group-middle"]}>
            <div className={globalStyles["title-description-image-container"]}>
              <div className={globalStyles["title-description"]}>
                <p className={globalStyles["first-line"]}>
                  Providing Customized Solutions
                </p>

                <div className={globalStyles["description-one-small"]}>
                  <p>
                    OneRX represents a collection of highly qualified designers,
                    architects, project managers and engineers. We are
                    specialist in retail and brand development and work
                    internationally.
                  </p>
                  <p>
                    We have offices in (HQ) Dubai, Seoul, Istanbul allowing us
                    to respond quickly to our client’s regional needs. Our teams
                    can develop projects from concept through project management
                    and replicate it anywhere.
                  </p>
                  <p>
                    OneRX culture is to provide customized solutions with high
                    quality services. Our goal is to ensure our clients succeed
                    and that we become an extension of their business.
                  </p>
                </div>
              </div>
              <div className={globalStyles["image"]}>
                <img src={imageSources[2].image} alt="" />
              </div>
            </div>
          </div>

          {/* title-description-image-container */}
          {/* collaboration samsung chiel logo */}
          <div className={globalStyles["padding-group-middle-grayBackground"]}>
            <div className={globalStyles["title-description-image-container"]}>
              <div className={globalStyles["title-description"]}>
                <p className={globalStyles["first-line"]}>Collaboration</p>

                <div className={globalStyles["description-one-small"]}>
                  <p>
                    OneRX operates as a subsidiary of Samsung Group and in
                    cooperation with Cheil Worldwide.
                  </p>
                </div>
                <img
                  className={globalStyles["company-logo-image"]}
                  src={imageSources[3].image}
                  alt="samsung logo"
                />
                <img
                  className={globalStyles["company-logo-image"]}
                  src={imageSources[4].image}
                  alt="cheil logo"
                />
              </div>
              <div className={globalStyles["image-more"]}>
                <img src={imageSources[5].image} alt="" />
              </div>
            </div>
          </div>

          {/* video container */}
          {/* home same video */}
          <div className={`${globalStyles["padding-group-extend"]} ${globalStyles["video-80"]}`}>
            <VideoSection videoLink={imageSources[14].image} />
          </div>

          {/* title-description-image-container */}
          {/*  gear icon getting to know you */}
          <div className={globalStyles["padding-group-middle"]}>
            <div className={globalStyles["title-description-image-container-reverse"]}>
              <div className={globalStyles["title-description"]}>
                <p className={globalStyles["first-line-taller"]}>
                  Getting to know you
                </p>

                <div className={globalStyles["description-one"]}>
                We read, research, and explore to fully understand your brand and its objectives, the customer, and the specific and current market sector landscape. This research stage helps us set you apart and informs both the core functional nature, and the visual direction of the concept.
                </div>
                <p className={globalStyles["first-line-taller"]}>
                  Defining brand story at retail
                </p>

                <div className={globalStyles["description-one"]}>
                We read, research, and explore to fully understand your brand and its objectives, the customer, and the specific and current market sector landscape. This research stage helps us set you apart and informs both the core functional nature, and the visual direction of the concept.
                </div>
                <p className={globalStyles["first-line-taller"]}>
                  Bring a strategy to life 
                </p>

                <div className={globalStyles["description-one"]}>
                We are proud to have worked with some of the world’s largest and best loved brands across myriad sectors around the globe. And whether creating stores, concessions, branded spaces, pop-ups, point of sale or windows, our retail design bring brands to life through immersive physical experiences that engage your customers and create awareness among new audiences.
                </div>
              </div>
              <div className={globalStyles["image"]}>
                <img src={imageSources[6].image} alt="" />
              </div>
            </div>
          </div>

          {/* title-description-image-container */}
          {/*  gear icon getting to know you */}
          <div className={globalStyles["padding-group-middle"]}>
            <div className={globalStyles["title-description-image-container-reverse"]}>
              <div className={globalStyles["title-description"]}>
                <p className={globalStyles["first-line-taller"]}>
                  Global Reach
                </p>

                <div className={globalStyles["description-one"]}>
                We have implemented projects in every far reaching corner of the world. We know the nuances of specific markets, consumers and even store groups like the back of our hand, and we understand what it takes to get to know somewhere new. Wherever your sights are set, we are up for the challenge and will ensure that you remain relevant and distinctive; anywhere in the world.
                </div>
              </div>
              <div className={globalStyles["image"]}>
                <img src={imageSources[7].image} alt="" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Gallery1;
