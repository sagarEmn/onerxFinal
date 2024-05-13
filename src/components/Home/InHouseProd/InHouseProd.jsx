import React, { useState, useEffect } from "react";
import globalStyles from "../../../global.module.css";
import styles from "./InHouseProd.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Gallery2 = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 950,
      easing: "ease-out",
    });
  }, []);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <>
      <div className={globalStyles["outer-container"]}>
        <div className={globalStyles["padding-container"]}>
          <div className={globalStyles["title-description-image-container"]}>
            <div className={globalStyles["title-description"]}>
              <p className={`${globalStyles["first-line"]}`}>IN-HOUSE Production</p>
              <p className={`${globalStyles["description-one"]}`}>
                Each stage of the process is underpinned by a full range of
                services we offer in-house, performed by a team of experts
                passionate about shaping the future of retail.
              </p>
              <div className={styles["three-menu-container"]}>
                <div className={styles.menu}>
                  <div
                    className={`${styles["menu-item"]} ${
                      styles["description-one-small"]
                    } ${activeIndex === 0 ? styles.active : ""}`}
                    onClick={() => handleClick(0)}
                  >
                    INNOVATION
                  </div>
                  <div
                    className={`${styles["menu-item"]} ${
                      styles["description-one-small"]
                    } ${activeIndex === 1 ? styles.active : ""}`}
                    onClick={() => handleClick(1)}
                  >
                    PRODUCTION
                  </div>
                  <div
                    className={`${styles["menu-item"]} ${
                      styles["description-one-small"]
                    } ${activeIndex === 2 ? styles.active : ""}`}
                    onClick={() => handleClick(2)}
                  >
                    QUALITY
                  </div>
                </div>
                <div className={styles["description-one"]}>
                  <div
                    className={`${styles.description} ${
                      activeIndex === 0 ? styles.active : ""
                    }`}
                  >
                    Innovation is one of our core in-house capabilities. We help
                    to deploy great ideas and brilliant design to bring our
                    client's products and services to life, to real users.
                  </div>
                  <div
                    className={`${styles.description} ${
                      activeIndex === 1 ? styles.active : ""
                    }`}
                  >
                    We provide the best of both the design and production with
                    access to the technology to build anything custom and
                    complex.
                  </div>
                  <div
                    className={`${styles.description} ${
                      activeIndex === 2 ? styles.active : ""
                    }`}
                  >
                    We bring all members of a project team together early in the
                    process to propose best-value solutions, identify and
                    address issues of cost, schedule and constructibility to
                    reduce risk for design errors.
                  </div>
                </div>
              </div>
            </div>

            {/* image */}
            <div
              className={styles["gallery-image"]}
              data-aos="fade-up"
              data-aos-delay="150"
            >
              <img
                src="https://res.cloudinary.com/drplnrrww/image/upload/v1715515293/homeGallery/inhouseprodImage_uoavpb.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery2;
