import React, { useState, useEffect, useRef } from "react";
import styles from "./Couch.module.css";

const Couch = () => {
  const [isInView, setIsInView] = useState(false);
  const imageRef = useRef(null);

  // Set up IntersectionObserver to detect when the image enters the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsInView(true); // Image is in the viewport
        } else {
          setIsInView(false); // Image is out of the viewport
        }
      },
      {
        rootMargin: "0px",
        threshold: 0.1, // Trigger when 10% of the image is visible
      }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <div className={styles.container}>
      <img
        ref={imageRef}
        src="./yellowCouch.jpg"
        alt="Couch"
        className={`${styles.couchImg} ${isInView ? styles.slideIn : ""}`}
      />
    </div>
  );
};

export default Couch;
