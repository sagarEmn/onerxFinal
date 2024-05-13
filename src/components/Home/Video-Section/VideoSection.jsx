import React from "react";
import styles from "../../../global.module.css";

export default function VideoSection({ videoLink }) {
  return (
    <>
      <div className={styles["video-outer-container"]}>
        <video autoPlay muted className={styles["video"]} controls={false}>
          <source src="https://res.cloudinary.com/drplnrrww/video/upload/v1715518197/homeGallery/compressedTwo_cdtuhx.mp4" />
          Your Browser doesn't support the video.
        </video>
      </div>
    </>
  );
}
