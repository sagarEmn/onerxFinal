import React from "react";
import globalStyles from "../../global.module.css";
import localStyles from "./GalleryLocal.module.css";

const Gallery = () => {
  const renderImages = (start, end) => {
    const images = [];
    for (let i = start; i <= end; i++) {
      images.push(
        <img
          key={i}
          src={`src/components/Gallery/galleryImages/jpg/${i}.jpg`}
          alt={`Image ${i}`}
          className={localStyles.gallerySectionImage}
        />
      );
    }
    return images;
  };

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

          <div className={localStyles.galleryRow}>
            <img
              src="src\components\Gallery\galleryImages\jpeg\1.jpeg" // Use the imported image
              alt="Image 1"
              className={localStyles.gallerySectionImage}
            />
            <img
              src="src\components\Gallery\galleryImages\jpeg\2.jpeg" // Use the imported image
              alt="Image 1"
              className={localStyles.gallerySectionImage}
            />
            <img
              src="src\components\Gallery\galleryImages\jpeg\3.jpeg" // Use the imported image
              alt="Image 1"
              className={localStyles.gallerySectionImage}
            />
          </div>

          {/* gallery container */}
          <div className={localStyles.gallerySectionContainer}>
            <div className={localStyles.galleryRow}>{renderImages(1, 3)}</div>
            <div className={localStyles.galleryRow}>{renderImages(4, 6)}</div>
            <div className={localStyles.galleryRow}>{renderImages(7, 9)}</div>
            <div className={localStyles.galleryRow}>{renderImages(10, 12)}</div>
            <div className={localStyles.galleryRow}>{renderImages(13, 15)}</div>
            <div className={localStyles.galleryRow}>{renderImages(16, 18)}</div>
            <div className={localStyles.galleryRow}>{renderImages(19, 21)}</div>
            <div className={localStyles.galleryRow}>{renderImages(22, 24)}</div>
            <div className={localStyles.galleryRow}>{renderImages(25, 27)}</div>
            <div className={localStyles.galleryRow}>{renderImages(28, 30)}</div>
            <div className={localStyles.galleryRow}>{renderImages(31, 33)}</div>
            <div className={localStyles.galleryRow}>{renderImages(34, 36)}</div>
            <div className={localStyles.galleryRow}>{renderImages(37, 39)}</div>
            <div className={localStyles.galleryRow}>{renderImages(40, 42)}</div>
            <div className={localStyles.galleryRow}>{renderImages(43, 45)}</div>
            <div className={localStyles.galleryRow}>{renderImages(46, 48)}</div>
            <div className={localStyles.galleryRow}>{renderImages(49, 51)}</div>
            <div className={localStyles.galleryRow}>{renderImages(52, 54)}</div>
            <div className={localStyles.galleryRow}>{renderImages(55, 57)}</div>
            <div className={localStyles.galleryRow}>{renderImages(58, 60)}</div>
            <div className={localStyles.galleryRow}>{renderImages(61, 63)}</div>
            <div className={localStyles.galleryRow}>{renderImages(64, 66)}</div>
            <div className={localStyles.galleryRow}>{renderImages(67, 69)}</div>

            {/* Add more rows as needed */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
