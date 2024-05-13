import React from "react";
import styles from "./ThreeImageGrid.module.css";

export default function ThreeImageGrid({ imageSources }) {
  return (
    <div className={styles["grid"]}>
      <div className={styles.gridContainer}>
        {imageSources.map((src, index) => (
          <div className={styles.gridItem} key={index}>
            <img src={src} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
