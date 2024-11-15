import React, { useState, useEffect, useRef } from "react";
import styles from "./visualProd.module.css";

const VisualProd = () => {
  const [isInView, setIsInView] = useState(false);
  const h1Ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsInView(true);
        } else {
          setIsInView(false);
        }
      },
      {
        rootMargin: "0px",
        threshold: 0.1,
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
    <div className={styles.vis_prod_main}>
      <h1 ref={h1Ref} className={isInView ? styles.slideIn : ""}>
        Visual Product Photography
      </h1>
    </div>
  );
};

export default VisualProd;
