import { useLayoutEffect, useRef, useState } from "react";
import styles from "./lifestyle.module.css";

const LifestyleComponent = () => {
  const preScroll = useRef(null);
  const elemRef = useRef(null);
  const [scale, setScale] = useState(1.05);

  return (
    <div
      style={{
        transition: "transform 1000ms ease-in-out",
        transform: `scale(${scale})`,
      }}
      className={styles.lifestyle_main}
    >
      <img className={styles.lifestyle_img} src="life.jpg" />
      <p className={styles.lifestyle_txt}>Lifestyle Scenes</p>
    </div>
  );
};

export default LifestyleComponent;
