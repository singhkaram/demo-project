import React, { useEffect, useState } from "react";
import Styles from "./Styles.module.css";
import { BackIcon, ForwardIcon } from "../../Icons/HomeIcon";

const images = [
  "images/shop-hero-1-product-slide-1.png",
  "images/shop-hero-1-product-slide-1.png",
  "images/shop-hero-1-product-slide-1.png",
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className={Styles.carousel_container}>
      <div>
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className={Styles.carousel_image}
        />
        <div className={Styles.text_container}>
          <h5>T-shirt / Tops</h5>
          <h1>Summer Value Pack</h1>
          <h4>cool / colorful / comfy</h4>
          <button type="button">Shop Now</button>
        </div>
      </div>
      <div className={Styles.button_container}>
        <BackIcon onClick={goToPrev} />
        <ForwardIcon onClick={goToNext} />
      </div>

      <div className={Styles.dots_container}>
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`${Styles.dot} ${
              idx === currentIndex ? Styles.active_dot : ""
            }`}
            onClick={() => setCurrentIndex(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
