import React, { useRef, useEffect } from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";

const CasesSlider = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    swiperRef.current = new Swiper(".swiper-container", {
      slidesPerView: 1,
      spaceBetween: 30,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
    return () => {
      if (swiperRef.current) {
        swiperRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="swiper-container">
      <ul className="swiper-wrapper">
        {/* Додайте ваші слайди тут */}
        <li className="swiper-slide">Slide 1</li>
        <li className="swiper-slide">Slide 2</li>
        {/* ... */}
      </ul>
    </div>
  );
};

export default CasesSlider;
