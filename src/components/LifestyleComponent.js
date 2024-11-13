import React from "react";
import styles from "./lifestyle.module.css";

const LifestyleComponent = () => {
  return (
    <div className={styles.lifestyle_main}>
      <img className={styles.lifestyle_img} src="life.jpg" />
      <p className={styles.lifestyle_txt}>Lifestyle Scenes</p>
    </div>
  );
};

export default LifestyleComponent;
