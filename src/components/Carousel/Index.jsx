import React, { useEffect, useState } from "react";
import Styles from "./Styles.module.css";

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
      <button onClick={goToPrev} className={Styles.nav_button}>
        ‹
      </button>

      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className={Styles.carousel_image}
      />

      <button onClick={goToNext} className={Styles.nav_button}>
        ›
      </button>

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
