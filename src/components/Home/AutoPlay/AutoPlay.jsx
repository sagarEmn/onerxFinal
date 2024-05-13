import React from "react";
import Slider from "react-slick";
import "./AutoPlay.css";
import { images } from "./AutoPlayImages"; // Import the images array

function AutoPlay() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 6,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <div className="small-slider-container">
      <div className="slider-container">
        <Slider {...settings}>
          {/* Map through the imported images array and generate img elements */}
          {images.map((imageUrl, index) => (
            <div className="slider-item" key={index}>
              <img src={imageUrl} alt={`Image ${index}`} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default AutoPlay;
