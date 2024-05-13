import React from "react";
import styles from "./VideoSection.module.css";
import globalStyles from "../../../global.module.css";

export default function VideoSection({ videoLink }) {
  return (
    <>
      <div
        className={`${styles["video-outer-container"]} ${globalStyles["video-outer-container"]}`}
      >
        <video autoPlay muted className={styles["video"]} controls={false}>
          <source src={videoLink} />
          Your Browser doesn't support the video.
        </video>
      </div>
    </>
  );
}
