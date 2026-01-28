import { useState } from "react";
import img1 from "../../images/slide1.svg";
import img2 from "../../images/slide2.svg";
import img3 from "../../images/slide3.svg";
import "./slider.css";
import { Pagination } from "./pagination/pagination";

const images = [img1, img2, img3];

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      if (prev + 1 >= images.length) {
        return 0;
      } else {
        return prev + 1;
      }
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      if (prev - 1 < 0) {
        return images.length - 1;
      } else {
        return prev - 1;
      }
    });
  };

  return (
    <div className="custom-slider">
      <div className="slider-image-container">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          key={currentIndex}
          className="slider-image"
        />
      </div>
      <div className="slider-controls">
        <Pagination
          currentIndex={currentIndex + 1}
          total={images.length}
          onDecrement={prevSlide}
          onIncrement={nextSlide}
        />
      </div>
    </div>
  );
}
