import React, { useState, useEffect, useRef } from "react";
import styles from "./Couch.module.css";

const Couch = () => {
  const [isInView, setIsInView] = useState(false); // Track if image is in view
  const imageRef = useRef(null); // Reference to the image element

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

    // Observe the image element
    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    // Clean up observer when the component unmounts
    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []); // Empty array ensures it runs only once

  return (
    <div className={styles.container}>
      <img
        ref={imageRef}
        src="./yellowCouch.jpg" // Path to your image
        alt="Couch"
        className={`${styles.couchImg} ${isInView ? styles.slideIn : ""}`}
      />
    </div>
  );
};

export default Couch;
