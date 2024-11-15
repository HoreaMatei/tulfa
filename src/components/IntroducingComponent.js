import React, { useState, useEffect, useRef } from "react";
import styles from "./introducingComponent.module.css";

const IntroducingComponent = () => {
  const [isInView, setIsInView] = useState(false);
  const h1Ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          // Trigger animation when the element is sufficiently in view
          setIsInView(true);
        }
      },
      {
        rootMargin: "0px 0px -30% 0px", // Trigger 30% earlier than reaching full visibility
        threshold: 0.1, // Trigger animation when at least 50% of the element is in view
      }
    );

    if (h1Ref.current) {
      observer.observe(h1Ref.current);
    }
    return () => {
      if (h1Ref.current) {
        observer.unobserve(h1Ref.current);
      }
    };
  }, []);

  return (
    <div className={styles.intro_main}>
      <h5
        ref={h1Ref}
        className={isInView ? styles.slideIn : ""}
        style={{ backgroundImage: "url(./background.png)" }}
      >
        Introducing
      </h5>
    </div>
  );
};

export default IntroducingComponent;
