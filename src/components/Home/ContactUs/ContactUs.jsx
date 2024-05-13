import React from "react";
import styles from "../../../global.module.css";

export default function ContactUs() {
  // Array of image sources
  const imageSources = [
    "https://res.cloudinary.com/drplnrrww/image/upload/fl_preserve_transparency/v1715512511/contact-icons/map_iax1ly.jpg?_s=public-apps",
    "https://res.cloudinary.com/drplnrrww/image/upload/fl_preserve_transparency/v1715512511/contact-icons/phone_c8hj4l.jpg?_s=public-apps",
    "https://res.cloudinary.com/drplnrrww/image/upload/fl_preserve_transparency/v1715512511/contact-icons/map_iax1ly.jpg?_s=public-apps",
    "https://res.cloudinary.com/drplnrrww/image/upload/fl_preserve_transparency/v1715512511/contact-icons/phone_c8hj4l.jpg?_s=public-apps",
    "https://res.cloudinary.com/drplnrrww/image/upload/fl_preserve_transparency/v1715512510/contact-icons/mail_qjesgj.jpg?_s=public-apps",
    "https://res.cloudinary.com/drplnrrww/image/upload/fl_preserve_transparency/v1715512510/contact-icons/mail_qjesgj.jpg?_s=public-apps",
  ];

  return (
    <>
      <div className={styles["outer-container"]}>
        <div className={styles["padding-container"]}>
          <div className={styles["title-description-image-container"]}>
            <div className={styles["title-description-flexGap"]}>
              <p className={styles["first-line"]}>Contact Us</p>

              <div className={styles["contact-us-information"]}>
                <div className={styles["contact-icons"]}>
                  <img src={imageSources[0]} alt="Map Icon" />
                </div>

                <div className={styles["contact-details"]}>
                  <p>HQ DUBAI OFFICE:</p>
                  <p>One RX Interior Decoration LLC Plot No - 598-709 </p>
                  <p>Next to Dubai Metal Grating & Manufcturing LLC DIP - 1 </p>
                  <p>Dubai / UAE </p>
                </div>
              </div>

              <div className={styles["contact-us-information"]}>
                <div className={styles["contact-icons"]}>
                  <img src={imageSources[1]} alt="Phone Icon" />
                </div>

                <div className={styles["contact-details"]}>
                  <p>+971 4 590 4700</p>
                </div>
              </div>

              <div className={styles["contact-us-information"]}>
                <div className={styles["contact-icons"]}>
                  <img src={imageSources[2]} alt="Map Icon" />
                </div>

                <div className={styles["contact-details"]}>
                  <p>TURKEY OFFICE:</p>
                  <p>Orta Mah. İbrahim Ağa Cad. No:18 Kısmet Han </p>
                  <p>Zemin kat Bayrampaşa, İstanbul / TÜRKİYE </p>
                </div>
              </div>

              <div className={styles["contact-us-information"]}>
                <div className={styles["contact-icons"]}>
                  <img src={imageSources[3]} alt="Phone Icon" />
                </div>

                <div className={styles["contact-details"]}>
                  <p>+90 212 437 8072</p>
                </div>
              </div>

              <div className={styles["contact-us-information"]}>
                <div className={styles["contact-icons"]}>
                  <img src={imageSources[4]} alt="Mail Icon" />
                </div>

                <div className={styles["contact-details"]}>
                  <p>info@one-rx.com</p>
                </div>
              </div>

              <div className={styles["contact-us-information"]}>
                <div className={styles["contact-icons"]}>
                  <img src={imageSources[5]} alt="Mail Icon" />
                </div>

                <div className={styles["contact-details"]}>
                  <p>infoturkey@one-rx.com</p>
                </div>
              </div>
            </div>

            <div className={styles["title-description-flexGap"]}>
              <p className={styles["first-line"]}>Drop Us A Line</p>

              <div className={styles["contact-us-information"]}>
                <div className={styles["contact-details"]}>
                  <input
                    type="text"
                    placeholder="Name"
                    className={styles["input-field"]}
                  />
                </div>
              </div>

              <div className={styles["contact-us-information"]}>
                <div className={styles["contact-details"]}>
                  <input
                    type="email"
                    placeholder="Email"
                    className={styles["input-field"]}
                  />
                </div>
              </div>

              <div className={styles["contact-us-information"]}>
                <div className={styles["contact-details"]}>
                  <textarea
                    placeholder="Message"
                    className={styles["textarea-field"]}
                  ></textarea>
                </div>
              </div>
              <p className={styles["description-one"]}>
                If you are interested in working with us then please dop us a
                line, or contact us below informations, we would love to hear
                from you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
