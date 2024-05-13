import React from "react";
import styles from "../../../global.module.css";

export default function TenYearsExp() {
  return (
    <>
      <div className={styles["outer-container"]}>
        <div className={styles["padding-container"]}>
          <p className={styles["first-line"]}>
            10+ Years Of Experience In Worldwide
          </p>
          <div className={styles["image-container"]}>
            <img
              src="https://res.cloudinary.com/drplnrrww/image/upload/v1715515289/homeGallery/homeGlobal_xcfskv.png"
              alt="image"
            />
          </div>
          <p className={styles["first-line"]}>
          We are global interior and branding experts specialising in customer-centric experience design.
          </p>
          <p className={styles["description-one"]}>
          One RX has a cross-border retail network of professionals who have worked together to help retail brands meet the needs of their business in the Europe, Asia and Middle East. Various retail environment experience in diverse country ; proven experience in GCC, Turkey, Africa, Russia and Korea.
          </p>

        </div>
      </div>
    </>
  );
}
