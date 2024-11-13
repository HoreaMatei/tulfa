import React, { useState } from "react";
import styles from "./carousel.module.css";

const Carousel = ({ children: slides }) => {
  const [curr, setCurr] = useState(0);

  // Previous slide function
  const prev = () => {
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  };

  // Next slide function
  const next = () => {
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
  };

  return (
    <div className={styles.carousel_main}>
      <div className={styles.overflow_hidden}>
        <div
          className={styles.slides}
          style={{
            transform: `translateY(-${curr * 100}%)`,
            transition: "transform 0.5s ease-in-out", // smooth transition
          }}
        >
          {slides}
        </div>
        <div className={styles.arrows_div}>
          <button className={styles.arrow_button} onClick={prev}>
            <img
              className={styles.arrow_icon}
              src="./arrows/up.png"
              alt="Previous"
            />
          </button>
          <button className={styles.arrow_button} onClick={next}>
            <img
              className={styles.arrow_icon_down}
              src="./arrows/up.png"
              alt="Next"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
